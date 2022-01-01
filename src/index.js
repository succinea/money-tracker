import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <Auth0Provider
    domain="dev-v0muu2be.us.auth0.com"
    clientId="gYZg7O7IM5scsYtUDEjFIZaVck9uKRaR"
    redirectUri={window.location.origin}
  >
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Auth0Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
