import { useItems } from '../api';
import ClearCompleted from './ClearCompleted';
import Counter from './Counter';
import Filter from './Filter';

export default function Footer() {
  const items = useItems();

  return items.length ? (
    <footer className="footer">
      <Counter />
      <Filter />
      <ClearCompleted />
    </footer>
  ) : null;
}
