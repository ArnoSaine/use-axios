import { useEffect, useReducer } from 'react';
import axios from 'axios';
import stringify from 'fast-json-stable-stringify';
import get from '@postinumero/map-get-with-default';
import obsoleteWithReplacement from './utils/obsoleteWithReplacement';

export const create = config => {
  const axiosInstance =
    typeof config === 'function' ? config : axios.create(config);

  const responses = new Map();
  const requests = new Map();
  const updaters = new Map();

  function request(...args) {
    const key = stringify(args);
    const suspender = new Promise(async resolve => {
      try {
        responses.set(key, [null, await axiosInstance(...args)]);
      } catch (error) {
        responses.set(key, [error]);
      }
      resolve();
    });
    requests.set(key, suspender);
    return suspender;
  }

  const getUpdaters = key => updaters::get(key, () => new Set());

  function useAxios(...args) {
    const key = stringify(args);
    const [, forceUpdate] = useReducer(x => x + 1, 0);
    useEffect(() => {
      const updaters = getUpdaters(key);
      updaters.add(forceUpdate);
      return () => {
        updaters.delete(forceUpdate);
        if (!updaters.size) {
          requests.delete(key);
          responses.delete(key);
        }
      };
    }, [key]);
    if (responses.has(key)) {
      const [error, data] = responses.get(key);
      if (error) {
        throw error;
      }
      return data;
    }
    if (!requests.has(key)) {
      request(...args);
    }
    throw requests.get(key);
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

export { useAxios as default, refetch, useAxiosSafe };

export const reload = obsoleteWithReplacement(refetch, 'reload');
