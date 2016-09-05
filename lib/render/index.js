import path from 'path';
import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';

import configureStore from '../../src/store/configureStore';
import Root from '../../src/containers/Root';

import htmlTemplate from './htmlTemplate';

function handleRender(req, res) {
  const store = configureStore();
  const html = renderToString(<Root store={store} />);
  const initialState = store.getState();
  res.send(htmlTemplate(html, initialState));
}

export default handleRender;
