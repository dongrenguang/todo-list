import React from 'react';
import { renderToString } from 'react-dom/server';

import configureStore from '../../src/store/configureStore';
import Root from '../../src/containers/Root';

import htmlTemplate from './htmlTemplate';

export default function (req, res) {
  const store = configureStore();
  const html = renderToString(<Root store={store} />);
  const initialState = store.getState();
  res.send(htmlTemplate(html, initialState));
}
