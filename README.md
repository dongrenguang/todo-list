# Todo List
A simple application with React, Redux, Immutable and Express, supporting for isomorphic.

## Features
- [React](http://facebook.github.io/react/)
  + [React Redux](https://github.com/reactjs/react-redux)
  + [React Router](https://github.com/ReactTraining/react-router)
- [Redux](http://redux.js.org/)
  + [Reselect](https://github.com/reactjs/reselect)
  + [Redux Thunk](https://github.com/gaearon/redux-thunk)
  + [Redux Promise](https://github.com/acdlite/redux-promise)
  + [Redux Immutable](https://github.com/gajus/redux-immutable)
  + [Redux DevTools](https://github.com/gaearon/redux-devtools)
- [Immutable](http://facebook.github.io/immutable-js/)
- [Serialize Javascript](https://github.com/yahoo/serialize-javascript)
- [Isomorphic / Server Rendering](http://redux.js.org/docs/recipes/ServerRendering.html)
- [ES6](https://babeljs.io/docs/learn-es2015/) ([ES7](http://babeljs.io/docs/plugins/preset-stage-2/))
- [Babel](https://babeljs.io/)
- [Webpack](http://webpack.github.io/)
- [ESLint](http://eslint.org/)
- [Node.js](https://nodejs.org/en/)
  + [Express](http://expressjs.com/)

## How to install
```shell
$ git clone https://github.com/dongrenguang/todo-list.git
$ cd todo-list
$ npm install
```

## How to build
```shell
$ npm run build
```

## How to run
```shell
$ npm start
```
Then, open your browser and visit [http://localhost:8080](http://localhost:8080).

## Older Versions
- [v1.0](https://github.com/dongrenguang/todo-list/releases/tag/v1.0)
  + Head first [Redux](http://redux.js.org/)
  + Use [WebpackDevServer](https://webpack.github.io/docs/webpack-dev-server.html) for server
- [v2.0](https://github.com/dongrenguang/todo-list/releases/tag/v2.0)
  + Replace [WebpackDevServer](https://webpack.github.io/docs/webpack-dev-server.html) with [Express](http://expressjs.com/)
  + [Isomorphic/Server Rendering](http://redux.js.org/docs/recipes/ServerRendering.html)
  + Using series optimization methods, such as:
    * [Reselect](https://github.com/reactjs/reselect)
    * [Pure Render Decorator](https://github.com/felixgirault/pure-render-decorator)
    * [Serialize Javascript](https://github.com/yahoo/serialize-javascript)
- [v3.0](https://github.com/dongrenguang/todo-list/releases/tag/v3.0)
  + Import [Immutable](http://facebook.github.io/immutable-js/) for higher performance
  + Replace [Pure Render Decorator](https://github.com/felixgirault/pure-render-decorator) with [PureComponent](https://github.com/facebook/react/releases/tag/v15.3.0)
- latest version
  + Import [React Router](https://github.com/ReactTraining/react-router) (TODO)
