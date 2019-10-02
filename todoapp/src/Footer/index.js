import useAxios from 'use-axios';
import ClearCompleted from './ClearCompleted';
import Counter from './Counter';
import Filter from './Filter';

export default function Footer() {
  const items = useAxios('/api/items').data;
  const { length } = items;
  return length ? (
    <footer className="footer">
      <Counter />
      <Filter />
      <ClearCompleted />
    </footer>
  ) : null;
}
