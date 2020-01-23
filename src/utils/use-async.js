import { useEffect } from 'react';
import stringify from 'fast-json-stable-stringify';
import memoize from 'memoizee';
import useForceUpdate from 'use-force-update';

function value() {
  let value;
  // eslint-disable-next-line
  return setValue => (setValue ? (value = setValue) : value);
}

export default function createAsyncHook(func, config) {
  const memoizeConfig = {
    length: false,
    normalizer: stringify,
    ...config
  };

  const memoizedSuspender = memoize(value, memoizeConfig);
  const memoizedValue = memoize(value, memoizeConfig);
  const memoizedUpdaters = memoize(() => new Set(), memoizeConfig);

  async function asyncCall(...args) {
    try {
      memoizedValue(...args)([null, await func(...args)]);
    } catch (error) {
      memoizedValue(...args)([error]);
    }
  }

  function call(...args) {
    return memoizedSuspender(...args)(asyncCall(...args));
  }

  function useCallSafe(...args) {
    const forceUpdate = useForceUpdate();
    useEffect(() => {
      const updaters = memoizedUpdaters(...args);
      updaters.add(forceUpdate);
      return () => {
        updaters.delete(forceUpdate);
        if (!updaters.size) {
          memoizedUpdaters.delete(...args);
          memoizedSuspender.delete(...args);
          memoizedValue.delete(...args);
        }
      };
    }, []);
    const value = memoizedValue(...args)();
    if (value) {
      return value;
    }
    throw memoizedSuspender(...args)() ?? call(...args);
  }

  function useCall(...args) {
    const [error, data] = useCallSafe(...args);
    if (error) {
      throw error;
    }
    return data;
  }

  async function recall(...args) {
    const updaters = memoizedUpdaters(...args);
    if (updaters.size) {
      await call(...args);
      updaters.forEach(updater => updater());
    }
  }

  return [useCall, recall, useCallSafe];
}
