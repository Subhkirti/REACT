import React from 'react';
import My from './state_constructor'
import ReactDOM from 'react-dom';
import Without from './Without.js';
import Stat from './state_function';
import './index.css';
import Props from './props_function'
import MyComponent from './state_class'
import Student from './props_class'
ReactDOM.render(
  <>
    <Stat />
    <MyComponent />
    <Without />
    <Props name="Shubh" />
    <Student name="Kirti"/>
    <My />
  </>
  ,
  document.getElementById('root')
);


