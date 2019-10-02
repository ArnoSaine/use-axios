import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { put, delete as del } from 'axios';
import { refetch } from 'use-axios';

export default function Item({ item, item: { completed = false, title } }) {
  const [focus, setFocus] = useState();
  const [isEditing, setIsEditing] = useState();
  const inputRef = useRef();

  useEffect(() => {
    if (focus) {
      inputRef.current.focus();
      setFocus(false);
    }
  }, [focus, setFocus]);

  function handleSave() {
    setIsEditing(false);
    put('/api/items', {
      ...item,
      title: inputRef.current.value.trim()
    });
    refetch('/api/items');
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
          onChange={() => {
            put('/api/items', {
              ...item,
              completed: !completed
            });
            refetch('/api/items');
          }}
          type="checkbox"
        />
        <label>{title}</label>
        <button
          className="destroy"
          onClick={() => {
            del(`/api/items/${item._id}`);
            refetch('/api/items');
          }}
          type="button"
        />
      </div>
      <input
        className="edit"
        ref={inputRef}
        type="text"
        defaultValue={title}
        onKeyDown={({ keyCode }) => {
          if (keyCode === 13) {
            handleSave();
          }
        }}
        onBlur={handleSave}
      />
    </li>
  );
}
