import axios from 'axios';
import { create as createUseAsync } from '@postinumero/use-async/loading-state';

export const create = (config) =>
  createUseAsync(typeof config === 'function' ? config : axios.create(config));

const [useAxios, refetch, useAxiosSafe] = create(axios);

export { useAxios as default, useAxios, refetch, useAxiosSafe };
