import React from 'react';
import ReactDOM from 'react-dom/client';
import RootApp from './App.tsx';
import './i18n.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RootApp />
  </React.StrictMode>
);
