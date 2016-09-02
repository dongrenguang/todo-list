import React, { Component } from 'react';

import TodoListViewContainer from '../containers/TodoListViewContainer';

export default class App extends Component {
  render() {
    return (
      <div>
        <TodoListViewContainer />
      </div>
    );
  }
}
