import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect';

import TodoListView from '../components/TodoListView';
import * as TodoActionCreators from '../actions/TodoActionCreators';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/VisibilityFilters';

function selectTodos(todoList, filter) {
  switch (filter) {
    case SHOW_COMPLETED:
      return todoList.filter(todo => todo.get('completed'));
    case SHOW_ACTIVE:
      return todoList.filter(todo => !todo.get('completed'));
    case SHOW_ALL:
    default:
      return todoList;
  }
}

const todosSelector = state => state.getIn(['todos', 'todoList']);
const visibilityFilterSelector = state => state.getIn(['todos', 'visibilityFilter']);
const visibleTodosSelector = createSelector(
  [todosSelector, visibilityFilterSelector],
  (todoList, visibilityFilter) => selectTodos(todoList, visibilityFilter)
);

function mapStateToProps(state) {
  return {
    visibleTodos: visibleTodosSelector(state),
    visibilityFilter: state.getIn(['todos', 'visibilityFilter']),
    isFetching: state.getIn(['todos', 'isFetching']),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActionCreators, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListView);
