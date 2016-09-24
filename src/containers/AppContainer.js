import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect';

import App from '../components/App';
import * as TodoActionCreators from '../actions/TodoActionCreators';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/VisibilityFilters';

function getVisibleTodos(todoList, filter) {
  switch (filter) {
    case SHOW_ALL:
      return todoList;
    case SHOW_COMPLETED:
      return todoList.filter(todo => todo.get('completed'));
    case SHOW_ACTIVE:
      return todoList.filter(todo => !todo.get('completed'));
    default:
      throw new Error(`Unknown filter: ${filter}`);
  }
}

const todoListSelector = state => state.getIn(['todos', 'todoList']);
const visibilityFilterSelector = state => state.getIn(['todos', 'visibilityFilter']);
const visibleTodosSelector = createSelector(
  [todoListSelector, visibilityFilterSelector],
  (todoList, visibilityFilter) => getVisibleTodos(todoList, visibilityFilter)
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
