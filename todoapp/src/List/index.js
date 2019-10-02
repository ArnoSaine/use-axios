import { Route } from 'react-router-dom';
import Items from './Items';

export default function List() {
  return <Route path="/:filter?" component={Items} />;
}
