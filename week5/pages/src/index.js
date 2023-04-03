import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from './About'
import {BrowserRouter, 
  Routes, 
  Route} from "react-router-dom"; 


ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App/>}></Route>
    <Route path="/about" element={<About/>}></Route>
  </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
