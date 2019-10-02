import useAxios, { refetch } from 'use-axios';
import { delete as del } from 'axios';

export default function ClearCompleted() {
  const { data } = useAxios('/api/items');
  const items = data.filter(({ completed }) => completed);
  const { length } = items;
  return length ? (
    <button
      className="clear-completed"
      onClick={async () => {
        await Promise.all(items.map(({ _id }) => del(`/api/items/${_id}`)));
        refetch('/api/items');
      }}
      type="button"
    >
      Clear completed ({length})
    </button>
  ) : null;
}
