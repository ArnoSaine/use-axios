import { useEffect, useReducer } from 'react';
import axios from 'axios';
import stringify from 'fast-json-stable-stringify';
import get from '@postinumero/map-get-with-default';
import obsoleteWithReplacement from './utils/obsoleteWithReplacement';

export const create = config => {
  const axiosInstance =
    typeof config === 'function' ? config : axios.create(config);

  const responsesMap = new Map();
  const requestsMap = new Map();
  const updatersMap = new Map();

  function request(...args) {
    const key = stringify(args);
    const suspender = new Promise(async resolve => {
      try {
        responsesMap.set(key, [null, await axiosInstance(...args)]);
      } catch (error) {
        responsesMap.set(key, [error]);
      }
      resolve();
    });
    requestsMap.set(key, suspender);
    return suspender;
  }

  const getUpdaters = key => updatersMap::get(key, () => new Set());

  function useAxios(...args) {
    const key = stringify(args);
    const [, forceUpdate] = useReducer(x => x + 1, 0);
    useEffect(() => {
      const updatersSet = getUpdaters(key);
      updatersSet.add(forceUpdate);
      return () => {
        updatersSet.delete(forceUpdate);
        if (!updatersSet.size) {
          requestsMap.delete(key);
          responsesMap.delete(key);
        }
      };
    }, [key]);
    if (responsesMap.has(key)) {
      const [error, data] = responsesMap.get(key);
      if (error) {
        throw error;
      }
      return data;
    }
    if (!requestsMap.has(key)) {
      request(...args);
    }
    throw requestsMap.get(key);
  }

  async function refetch(...args) {
    const key = stringify(args);
    const updaters = getUpdaters(key);
    if (updaters.size) {
      await request(...args);
      updaters.forEach(updater => updater());
    }
  }

  function useAxiosSafe(...args) {
    try {
      return [null, useAxios(...args)];
    } catch (error) {
      // If error is a promise, rethrow it for React Suspense
      if (Promise.resolve(error) === error) {
        throw error;
      }
      return [error, {}];
    }
  }

  return { useAxios, refetch, useAxiosSafe };
};

const { useAxios, refetch, useAxiosSafe } = create(axios);

export { useAxios as default, useAxios, refetch, useAxiosSafe };

export const reload = obsoleteWithReplacement(refetch, 'reload');
