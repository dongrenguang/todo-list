import React, { PropTypes, PureComponent } from 'react';

import Todo from './Todo';

export default class TodoList extends PureComponent {
  static propTypes = {
    onTodoClick: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }).isRequired).isRequired,
  };

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(id) {
    return this.props.onTodoClick(id);
  }

  render() {
    return (
      <ul>
        {
          this.props.todos.map(todo =>
            <Todo
              {...todo}
              key={todo.id}
              onClick={this.onClick}
            />
          )
        }
      </ul>
    );
  }
}
