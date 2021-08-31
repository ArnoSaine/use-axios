import { create as createAxios } from 'axios';
import { create as createUseAxios } from 'use-axios';

const axios = createAxios({ baseURL: 'https://api.example.com/v1' });

const { useAxios, refetch } = createUseAxios(axios);

const { delete: del, post, put } = axios;

export function useItems() {
  return useAxios('/items').data;
}

export async function postItem(item) {
  await post('/items', item);
  await refetch('/items');
}

export async function putItem(item) {
  await put(`/items/${item._id}`, item);
  await refetch('/items');
}

export async function putItems(items) {
  await put('/items', items);
  await refetch('/items');
}

export async function deleteItem(item) {
  await del(`/items/${item._id}`);
  await refetch('/items');
}

export async function deleteItems(items) {
  await del('/items', { data: items.map((item) => item._id) });
  await refetch('/items');
}

// Poll API 😕 to get updates from other users and tabs
//setInterval(() =>  client.refetchItems(), 5000);
