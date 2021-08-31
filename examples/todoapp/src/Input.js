import { useRef } from 'react';
import { postItem } from './api';

export default function Input() {
  const inputRef = useRef(null);

  return (
    <input
      ref={inputRef}
      autoFocus
      className="new-todo"
      onKeyDown={async ({ key }) => {
        const input = inputRef.current;
        if (input) {
          const title = input.value.trim();
          if (key === 'Enter' && title) {
            await postItem({ title });
            input.value = '';
          }
        }
      }}
      placeholder="What needs to be done?"
      type="text"
    />
  );
}
