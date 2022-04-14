import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Prop from './props';
ReactDOM.render(
  <React.StrictMode>
    <App />
    <Prop name="kirti"/>
  </React.StrictMode>,
  document.getElementById('root')
);

