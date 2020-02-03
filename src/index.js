import React from 'react';
import ReactDOM from 'react-dom';
import './styles/foundation.css';
import './index.css';
import App from './component/app';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import {podcastOperations} from './redux/ducks/podcast';
import initialState from './redux/initialState';
import properties from './properties';
import * as serviceWorker from './serviceWorker';
import './styles/foundation.css'

const store = configureStore(initialState);
store.dispatch(podcastOperations.getRss(properties.rss));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
