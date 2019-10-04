import useAxios, { refetch } from 'use-axios';
import { delete as del, post, put } from 'axios';

export function useItems() {
  return useAxios('/api/items').data;
}

export async function deleteItems(items) {
  await Promise.all(items.map(({ _id }) => del(`/api/items/${_id}`)));
  await refetch('/api/items');
}

export async function deleteItem(id) {
  await del(`/api/items/${id}`);
  await refetch('/api/items');
}

export async function postItem(item) {
  await post('/api/items', item);
  await refetch('/api/items');
}

export async function putItem(item) {
  await put('/api/items', item);
  await refetch('/api/items');
}

export async function putItems(items) {
  await Promise.all(items.map(item => put('/api/items', item)));
  await refetch('/api/items');
}

// Poll API 😕 to get updates from other users and tabs
setInterval(() => refetch('/api/items'), 5000);
