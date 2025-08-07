import React from 'react';
import ReactDOM from 'react-dom/client';
// Αντικατάστησε το BrowserRouter με HashRouter
import { HashRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);