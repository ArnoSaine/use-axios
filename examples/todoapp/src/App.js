import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Container from './Container';
import Footer from './Footer';
import Input from './Input';
import List from './List';
import ToggleAll from './ToggleAll';
import { homepage } from '../package.json';

function App() {
  return (
    <Suspense fallback="loading...">
      <Container>
        <BrowserRouter
          basename={process.env.NODE_ENV === 'test' ? undefined : homepage}
        >
          <section className="todoapp">
            <header>
              <h1>todos</h1>
            </header>
            <Input />
            <section className="main">
              <ToggleAll />
              <List />
              <Footer />
            </section>
          </section>
        </BrowserRouter>
      </Container>
    </Suspense>
  );
}

export default App;
