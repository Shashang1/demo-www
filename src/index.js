import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import rootReducer from './reducers/index'
import {logger} from 'redux-logger';
import App from './App';
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux';
import rootSaga from './sagas';
import { persistStore, persistReducer } from  'redux-persist'
import storage from 'redux-persist/lib/storage'

const config = {
  key:'data',
  storage:storage
}
const preducer = persistReducer(config, rootReducer)

const sagaMiddleware = createSagaMiddleware();  
const store = createStore(
  preducer,
  applyMiddleware(sagaMiddleware, logger)
)
const persistor = persistStore(store)
sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store= {store}>
    <App />
  </Provider>
  ,document.getElementById('root'));

export {store, persistor}
