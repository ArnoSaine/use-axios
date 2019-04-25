import { useEffect, useState } from 'react';
import axios from 'axios';
import stringify from 'fast-json-stable-stringify';

const responses = new Map();
const requests = new Map();
const updatersByKey = new Map();

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

export default function useAxios(...args) {
  const key = stringify(args);
  const setState = useState()[1];
  useEffect(() => {
    const forceUpdate = () => setState({});
    if (!updatersByKey.has(key)) {
      updatersByKey.set(key, new Set());
    }
    const updaters = updatersByKey.get(key);
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

export async function reload(...args) {
  const key = stringify(args);
  await request(...args);
  updatersByKey.get(key).forEach(forceUpdate => forceUpdate());
}
