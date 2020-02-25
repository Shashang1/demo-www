import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import reducer from './reducers/index'
import {logger} from 'redux-logger';
import App from './App';
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware, logger)
)
sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store= {store}>
    <App />
  </Provider>
  ,document.getElementById('root'));


