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
      <div style={styles.todoListView}>
        <AddTodo onAddClick={text => this.props.actions.addTodo(text)} />
        <TodoList
          todos={this.props.visibleTodos}
          onTodoClick={id => this.props.actions.completeTodo(id)}
        />
        <Footer
          filter={this.props.visibilityFilter}
          onFilterChange={nextFilter => this.props.actions.setVisibilityFilter(nextFilter)}
        />
        <div style={{ ...styles.overlay, display: (this.props.isFetching ? 'block' : 'none') }} />
      </div>
    );
  }
}

const styles = {
  todoListView: {
    position: 'relative',
    width: 300,
    height: 400,
    margin: 'auto',
    padding: 10,
    border: '1px solid gray',
    overflow: 'auto',
  },
  overlay: {
    background: 'rgba(0, 0, 0, 0.2)',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
};
