import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
import * as dotenv from "dotenv";
dotenv.config();

console.log(process.env.REACT_APP_AUTH_DOMAIN)
ReactDOM.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH_DOMAIN as string}
    clientId = {process.env.REACT_APP_CLIENT_ID as string}
    redirectUri = "http://localhost:3000/"
  >
      <App />
    
  </Auth0Provider>,
  document.getElementById('root')
);


