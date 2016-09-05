import React from 'react';
import { render } from 'react-dom';

import configureStore from './store/configureStore';
import Root from './containers/Root';

const initialState = window.__INITIAL_STATE__;  // From server.
const store = configureStore(initialState);

render(
  <Root store={store} />,
  document.getElementById('root')
);
