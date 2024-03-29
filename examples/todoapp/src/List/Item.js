import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import { deleteItem, putItem } from '../api';

export default function Item({ item, item: { completed = false, title } }) {
  const [focus, setFocus] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (focus) {
      inputRef.current?.focus();
      setFocus(false);
    }
  }, [focus, setFocus]);

  function handleSave() {
    if (isEditing) {
      setIsEditing(false);
      putItem({
        ...item,
        title: inputRef.current?.value.trim(),
      });
    }
  }

  return (
    <li
      className={clsx(completed && 'completed', isEditing && 'editing')}
      onDoubleClick={() => {
        setFocus(true);
        setIsEditing(true);
      }}
    >
      <div className="view">
        <input
          className="toggle"
          checked={completed}
          onChange={() =>
            putItem({
              ...item,
              completed: !completed,
            })
          }
          type="checkbox"
        />
        <label>{title}</label>
        <button className="destroy" onClick={() => deleteItem(item)} />
      </div>
      <input
        className="edit"
        ref={inputRef}
        type="text"
        defaultValue={title}
        onKeyDown={({ key }) => {
          if (key === 'Enter') {
            handleSave();
          }
        }}
        onBlur={handleSave}
      />
    </li>
  );
}
