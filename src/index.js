import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainApp from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
 <GoogleOAuthProvider clientId="1047247944717-061jv17p2cr2m078vhrvd1faghg3vcp5.apps.googleusercontent.com">

    <MainApp />
    </GoogleOAuthProvider>
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
