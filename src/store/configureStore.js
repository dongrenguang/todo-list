import promiseMiddleware from 'redux-promise';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import callAPIMiddleware from '../middlewares/callAPI';
import reducers from '../reducers';

const createStoreWithMiddleware = applyMiddleware(
  promiseMiddleware,
  thunkMiddleware,
  callAPIMiddleware,
)(createStore);

const devToolsExtension = (typeof window !== 'undefined')
  ? (window.devToolsExtension && window.devToolsExtension())
  : undefined;

export default function configureStore(initialState) {
  return createStoreWithMiddleware(reducers, initialState, devToolsExtension);
}
