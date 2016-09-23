import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect';

import TodoListView from '../components/TodoListView';
import * as TodoActionCreators from '../actions/TodoActionCreators';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/VisibilityFilters';

function selectTodos(todos, filter) {
  switch (filter) {
    case SHOW_COMPLETED:
      return todos.filter(todo => todo.get('completed'));
    case SHOW_ACTIVE:
      return todos.filter(todo => !todo.get('completed'));
    case SHOW_ALL:
    default:
      return todos;
  }
}

const todosSelector = state => state.todoList.todos;
const visibilityFilterSelector = state => state.todoList.visibilityFilter;
const visibleTodosSelector = createSelector(
  [todosSelector, visibilityFilterSelector],
  (todos, visibilityFilter) => selectTodos(todos, visibilityFilter)
);

function mapStateToProps(state) {
  return {
    visibleTodos: visibleTodosSelector(state),
    visibilityFilter: state.todoList.visibilityFilter,
    isFetching: state.todoList.isFetching,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActionCreators, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListView);
