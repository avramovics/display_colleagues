
import React from 'react';
import ReactDOM from 'react-dom';
import './sass/app.scss'
import App from './App';
import {createStore} from 'redux';
import rootReducer from "./js/reducers/index";
import { Provider } from 'react-redux';
let store = createStore(rootReducer);

//store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

