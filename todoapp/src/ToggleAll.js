import useAxios, { refetch } from 'use-axios';
import { put } from 'axios';

export default function ToggleAll() {
  const items = useAxios('/api/items').data;
  return items.length
    ? (() => {
        const completed = items.every(({ completed }) => completed);
        return (
          <>
            <input
              id="toggle-all"
              className="toggle-all"
              checked={completed}
              onChange={async () => {
                await Promise.all(
                  items.map(item =>
                    put('/api/items', {
                      ...item,
                      completed: !completed
                    })
                  )
                );
                refetch('/api/items');
              }}
              type="checkbox"
            />
            <label htmlFor="toggle-all" />
          </>
        );
      })()
    : null;
}
