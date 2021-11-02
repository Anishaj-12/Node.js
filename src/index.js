import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Helloworld from './Hello world/Helloworld';
import reportWebVitals from './reportWebVitals';
import Babysteps from './Babysteps/Babysteps'
import Mymodule from './http-client/http-client'
ReactDOM.render(
  <React.StrictMode>
    <Mymodule />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
