import React from 'react';
import ReactDOM from 'react-dom/client';
import { createClient, Provider } from 'urql';
import App from './App.tsx';
import './index.css';

const client = createClient({
  url: 'http://0.0.0.0:4000/graphql',
  exchanges: [],
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider value={client}>
      <App />
    </Provider>
  </React.StrictMode>,
);
