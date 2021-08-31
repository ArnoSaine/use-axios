import { useItems, putItems } from './api';

export default function ToggleAll() {
  const items = useItems();

  if (!items.length) {
    return null;
  }

  const completed = items.every(({ completed }) => completed);

  return (
    <>
      <input
        data-testid="toggle-all"
        id="toggle-all"
        className="toggle-all"
        checked={completed}
        onChange={() =>
          putItems(items.map((item) => ({ ...item, completed: !completed })))
        }
        type="checkbox"
      />
      <label htmlFor="toggle-all" />
    </>
  );
}
