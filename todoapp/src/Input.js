import { refetch } from 'use-axios';
import { post } from 'axios';

export default function Input() {
  return (
    <input
      autoFocus
      className="new-todo"
      onKeyDown={({ keyCode, target }) => {
        const title = target.value.trim();
        if (keyCode === 13 && title) {
          post('/api/items', { title, timestamp: Date.now() });
          refetch('/api/items');
          target.value = '';
        }
      }}
      placeholder="What needs to be done?"
      type="text"
    />
  );
}
