require('./main.css');
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import App from './containers/App'
import configureStore from './store/configureStore'

var appNode = document.createElement('div');
appNode.className = 'redux-starter-app';
document.body.appendChild(appNode);

const store = configureStore()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  appNode
);
