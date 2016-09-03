import React, { Component, PropTypes } from 'react';

import AddTodo from './AddTodo';
import Footer from './Footer';
import TodoList from './TodoList';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/VisibilityFilters';

export default class TodoListView extends Component {
  static propTypes = {
      visibleTodos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
      }).isRequired).isRequired,
      visibilityFilter: PropTypes.oneOf([
        SHOW_ALL,
        SHOW_COMPLETED,
        SHOW_ACTIVE,
      ]).isRequired,
      actions: PropTypes.shape({
        addTodo: PropTypes.func.isRequired,
        completeTodo: PropTypes.func.isRequired,
        setVisibilityFilter: PropTypes.func.isRequired,
      }),
  };

  render() {
    return (
      <div>
        <AddTodo onAddClick={text => this.props.actions.addTodo(text)} />
        <TodoList
          todos={this.props.visibleTodos}
          onTodoClick={index => this.props.actions.completeTodo(index)}
        />
        <Footer
          filter={this.props.visibilityFilter}
          onFilterChange={nextFilter => this.props.actions.setVisibilityFilter(nextFilter)}
        />
      </div>
    );
  }
}
