import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './Navbar';
import Cards from './card';
import Cardd from './com/Cardd';
import Foo from './com/other/foo';
import Fooo from './com/fooo/fooo';

ReactDOM.render(
  <React.StrictMode>
    <Navbar/>
    <App />
    <Cards/>
    <Cardd/>
    <Foo/>
    <Fooo/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
