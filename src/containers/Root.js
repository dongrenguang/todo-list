import React, { PropTypes, PureComponent } from 'react';
import { Provider } from 'react-redux';

import TodoListViewContainer from '../containers/TodoListViewContainer';

export default class Root extends PureComponent {
  static propTypes = {
    store: PropTypes.object.isRequired,
  };

  render() {
    return (
      <Provider store={this.props.store}>
        <TodoListViewContainer />
      </Provider>
    );
  }
}
