import path from 'path';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';

import configureStore from `${path.resolve('../../src/store/configureStore.js')}`;
// import Root from '../../src/containers/Root';

function handleRender(req, res) {
  const store = configureStore();
  // TODO ?////////////////////////////////////////
  const html = renderToString(
    <Root store={store} />
  );
  const initialState = store.getState();
  res.send(renderFullPage(html, initialState));
}

function renderFullPage(html, initialState) {
  return (`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Document</title>
      <script src="assets/vendor.js" charset="utf-8"></script>
      <style media="screen">
        body, html, #root {
          width: 100%;
          height: 100%;
        }
      </style>
    </head>
    <body>
      <div id="root">${html}</div>
      <script>
        window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
      </script>
      <script src="assets/index.js" charset="utf-8"></script>
    </body>
    </html>
  `);
}

export default handleRender;
