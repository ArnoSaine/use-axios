import useAxios from 'use-axios';
import Item from './Item';

export default function Items({
  match: {
    params: { filter }
  }
}) {
  const { data } = useAxios('/api/items');
  const items = filter
    ? data.filter(
        ({ completed }) => Boolean(completed) === (filter === 'completed')
      )
    : data;
  return (
    <ul className="todo-list">
      {items.map(item => (
        <Item key={item._id} item={item} />
      ))}
    </ul>
  );
}
