import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'

const WithRouter = () => <BrowserRouter><App/></BrowserRouter>

ReactDOM.render(
  <React.StrictMode>
    <WithRouter/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
