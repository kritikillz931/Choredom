import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthenticationPage } from './Authorization/AuthenticationPage';



ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <App />
  {/* <Routes>
    <Route path="*" element={<App/>}></Route>
  </Routes> */}
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
