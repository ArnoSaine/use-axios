import { useItems, deleteItems } from '../api';

export default function ClearCompleted() {
  const items = useItems();
  const completedItems = items.filter(({ completed }) => completed);
  const { length } = completedItems;
  return length ? (
    <button
      className="clear-completed"
      onClick={() => deleteItems(completedItems)}
    >
      Clear completed ({length})
    </button>
  ) : null;
}
