// it is used for dom manipulation like focus,colo changer. react doesn't allow dom manipulation. but sometimes we have feel need of it. so don't use it commonly.
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// 
