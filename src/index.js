import React from 'react';
import Immutable from 'immutable';
import { render } from 'react-dom';

import configureStore from './store/configureStore';
import Root from './containers/Root';

// const initialState = Immutable.fromJS(window.__INITIAL_STATE__);  // From server.
// const store = configureStore(initialState);
const store = configureStore();

render(
  <Root store={store} />,
  document.getElementById('root')
);
