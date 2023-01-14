import React from 'react';
import ReactDOM from 'react-dom/client';

import "./scss/main.module.scss";

import App from './App';

const main = ReactDOM.createRoot(document.getElementById('main'));

main.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);