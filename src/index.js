import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {SamuraiJSApp} from './App';
import store from './redux/redux-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

// import store from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <SamuraiJSApp/>
  </React.StrictMode>,
  document.getElementById('root')
);

// store.subscribe(() => {
//   let state = store.getState();
//   rerenderEntireTree(state);
// });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister(state);
