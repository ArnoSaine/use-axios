import axios from 'axios';
import stringify from 'fast-json-stable-stringify';
import obsoleteWithReplacement from './utils/obsoleteWithReplacement';
import createAsyncHook from './utils/use-async';

export const create = config =>
  createAsyncHook(
    typeof config === 'function' ? config : axios.create(config),
    { normalizer: stringify }
  );

const [useAxios, refetch, useAxiosSafe] = create(axios);

export { useAxios as default, useAxios, refetch, useAxiosSafe };

export const reload = obsoleteWithReplacement(refetch, 'reload');
