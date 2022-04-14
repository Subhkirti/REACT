import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './function';
import Student from './class';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Student />
  </React.StrictMode>,
  document.getElementById('root')
);
