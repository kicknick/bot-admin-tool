import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import combineReducers from './reducers'
import thunk from 'redux-thunk'
import App from './containers/App';

// applyMiddleware(thunk, logger);
// const store = createStore(combineReducers);
var store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
