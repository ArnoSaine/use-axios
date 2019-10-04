import { postItem } from './api';

export default function Input() {
  return (
    <input
      autoFocus
      className="new-todo"
      onKeyDown={async ({ keyCode, target }) => {
        const title = target.value.trim();
        if (keyCode === 13 && title) {
          await postItem({ title, timestamp: Date.now() });
          target.value = '';
        }
      }}
      placeholder="What needs to be done?"
      type="text"
    />
  );
}
