import React from 'react';
import ReactDOM from 'react-dom/client';
import { createClient, Provider } from 'urql';
import App from './App.tsx';
import './index.css';

const client = createClient({
  url: import.meta.env.VITE_API_URL as string,
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider value={client}>
      <App />
    </Provider>
  </React.StrictMode>,
);
