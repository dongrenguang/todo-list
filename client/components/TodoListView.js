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
      isFetching: PropTypes.bool.isRequired,
      actions: PropTypes.shape({
        addTodo: PropTypes.func.isRequired,
        completeTodo: PropTypes.func.isRequired,
        setVisibilityFilter: PropTypes.func.isRequired,
        initTodos: PropTypes.func.isRequired,
      }),
  };

  componentDidMount() {
    this.props.actions.initTodos();
  }

  render() {
    return (
      <div>
        <AddTodo onAddClick={text => this.props.actions.addTodo(text)} enabled={!this.props.isFetching} />
        <TodoList
          todos={this.props.visibleTodos}
          onTodoClick={id => this.props.actions.completeTodo(id)}
        />
        <Footer
          filter={this.props.visibilityFilter}
          onFilterChange={nextFilter => this.props.actions.setVisibilityFilter(nextFilter)}
        />
      </div>
    );
  }
}
