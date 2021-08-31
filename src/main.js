import { create as createUseAsync } from '@postinumero/use-async';
import axios from 'axios';
import obsoleteWithReplacement from './utils/obsoleteWithReplacement.js';

export const create = (config) => {
  const [useAxios, refetch, useAxiosSafe] = createUseAsync(
    typeof config === 'function' ? config : axios.create(config)
  );
  return {
    useAxios,
    refetch,
    useAxiosSafe,
  };
};

const { useAxios, refetch, useAxiosSafe } = create(axios);

export { useAxios as default, useAxios, refetch, useAxiosSafe };

export const reload = obsoleteWithReplacement(
  refetch,
  '`reload` function',
  '`refetch` function'
);
