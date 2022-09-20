import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { CounterPage } from './presentation/counter/counter_page';
import { store } from './redux';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <CounterPage />
    </Provider>
  </React.StrictMode>
);
