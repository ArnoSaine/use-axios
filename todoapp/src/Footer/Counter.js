import useAxios from 'use-axios';

export default function Counter() {
  const { data } = useAxios('/api/items');
  const items = data.filter(({ completed }) => !completed);
  const { length } = items;
  return (
    <span className="todo-count">
      {length} {length === 1 ? 'item' : 'items'} left
    </span>
  );
}
