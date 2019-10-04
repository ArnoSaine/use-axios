import { useItems } from '../api';

export default function Counter() {
  const items = useItems();
  const activeItems = items.filter(({ completed }) => !completed);
  const { length } = activeItems;
  return (
    <span className="todo-count">
      {length} {length === 1 ? 'item' : 'items'} left
    </span>
  );
}
