import React from 'react';
import { fromJS } from 'immutable';
import { render } from 'react-dom';

import configureStore from './store/configureStore';
import Root from './containers/Root';

const initialState = fromJS(window.__INITIAL_STATE__);  // From server.
const store = configureStore(initialState);

render(
  <Root store={store} />,
  document.getElementById('root')
);
