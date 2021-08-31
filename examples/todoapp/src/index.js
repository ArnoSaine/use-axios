import React from 'react';
import ReactDOM from 'react-dom';
import 'todomvc-app-css/index.css';
import 'todomvc-common/base.css';
import { homepage } from '../package.json';
import App from './App';

async function main() {
  if (
    typeof window !== 'undefined' &&
    window.document // &&
    // process.env.NODE_ENV === 'development' &&
    // process.env.REACT_APP_MOCK === 'msw'
  ) {
    if (
      window.location.pathname === homepage &&
      !window.location.pathname.endsWith('/')
    ) {
      window.location.pathname = `${window.location.pathname}/`;
      return;
    }

    const { worker } = await import('./mocks/browser');
    await worker.start({
      serviceWorker: {
        url: `${homepage}/mockServiceWorker.js`,
      },
    });
  }

  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

main();
