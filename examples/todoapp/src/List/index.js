import { useRouteMatch } from 'react-router-dom';
import { useItems } from '../api';
import Item from './Item';

export default function List() {
  const {
    params: { filter },
  } = useRouteMatch('/:filter?') ?? { params: {} };

  const items = useItems();

  const listItems = filter
    ? items.filter(
        ({ completed }) => Boolean(completed) === (filter === 'completed')
      )
    : items;

  return (
    <ul className="todo-list">
      {listItems.map((item) => (
        <Item key={item._id} item={item} />
      ))}
    </ul>
  );
}
