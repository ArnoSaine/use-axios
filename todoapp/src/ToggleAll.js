import { useItems, putItems } from 'api';

export default function ToggleAll() {
  const items = useItems();
  return items.length
    ? (() => {
        const completed = items.every(({ completed }) => completed);
        return (
          <>
            <input
              id="toggle-all"
              className="toggle-all"
              checked={completed}
              onChange={() =>
                putItems(
                  items.map((item) => ({ ...item, completed: !completed }))
                )
              }
              type="checkbox"
            />
            <label htmlFor="toggle-all" />
          </>
        );
      })()
    : null;
}
