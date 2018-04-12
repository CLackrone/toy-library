import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import rootReducer from './reducers'
//import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'

const store = createStore(rootReducer, 
  // compose(
  //   applyMiddleware(thunk), 
  //   window.devToolsExtension ? window.devToolsExtension() : f => f)
  )


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root'));
