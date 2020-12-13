import axios from 'axios';
import { create as createUseAsync } from '@postinumero/use-async';
import obsoleteWithReplacement from './utils/obsoleteWithReplacement';

export const create = (config) =>
  createUseAsync(typeof config === 'function' ? config : axios.create(config));

const [useAxios, refetch, useAxiosSafe] = create(axios);

export { useAxios as default, useAxios, refetch, useAxiosSafe };

export const reload = obsoleteWithReplacement(refetch, 'reload');
