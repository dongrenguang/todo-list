import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect';

import TodoListView from '../components/TodoListView';
import * as TodoActionCreators from '../actions/TodoActionCreators';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/VisibilityFilters';

function selectTodos(todos, filter) {
  switch (filter) {
    case SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    case SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
    case SHOW_ALL:
    default:
      return todos;
  }
}

const todosSelector = state => state.todo.todos;
const visibilityFilterSelector = state => state.todo.visibilityFilter;
const visibleTodosSelector = createSelector(
  [todosSelector, visibilityFilterSelector],
  (todos, visibilityFilter) => selectTodos(todos, visibilityFilter)
);

function mapStateToProps(state) {
  return {
    visibleTodos: visibleTodosSelector(state),
    visibilityFilter: state.todo.visibilityFilter,
    isFetching: state.todo.isFetching,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActionCreators, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListView);
