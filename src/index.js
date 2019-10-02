import { useEffect, useReducer } from 'react';
import axios from 'axios';
import stringify from 'fast-json-stable-stringify';
import get from '@postinumero/map-get-with-default';

const responses = new Map();
const requests = new Map();
const updaters = new Map();

function request(...args) {
  const key = stringify(args);
  const suspender = new Promise(async resolve => {
    try {
      responses.set(key, [null, await axios(...args)]);
    } catch (error) {
      responses.set(key, [error]);
    }
    resolve();
  });
  requests.set(key, suspender);
  return suspender;
}

const getUpdaters = key => updaters::get(key, () => new Set());

export default function useAxios(...args) {
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

export async function refetch(...args) {
  const key = stringify(args);
  await request(...args);
  getUpdaters(key).forEach(updater => updater());
}

export function useAxiosSafe(...args) {
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
