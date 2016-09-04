import createLogger from 'redux-logger';
import promiseMiddleware from 'redux-promise';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';


import reducers from '../reducers';

const loggerMiddleware = createLogger();
const createStoreWithMiddleware = applyMiddleware(
  // loggerMiddleware,
  promiseMiddleware,
  thunkMiddleware,
)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(reducers, initialState);
};
