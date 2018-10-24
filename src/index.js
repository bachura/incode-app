import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {composeWithDevTools} from 'redux-devtools-extension';
// import {createStore, applyMiddleware} from 'redux';
// import reducer from './reducers';
// import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'

// const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ), document.getElementById('root')
)

serviceWorker.unregister();