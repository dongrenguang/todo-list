import React, { PropTypes, PureComponent } from 'react';

import Todo from './Todo';

export default class TodoList extends PureComponent {
  static propTypes = {
    onTodoClick: PropTypes.func.isRequired,
    todos: PropTypes.object.isRequired,
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
              key={todo.get('id')}
              id={todo.get('id')}
              text={todo.get('text')}
              completed={todo.get('completed')}
              onClick={this.onClick}
            />
          )
        }
      </ul>
    );
  }
}
