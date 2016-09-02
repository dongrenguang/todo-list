import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TodoListView from '../components/TodoListView';
import { VisibilityFilters } from '../constants';
import * as TodoActionCreators from '../actions/TodoActionCreators';

function selectTodos(todos, filter) {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
  }
}

function mapStateToProps(state) {
  return {
    visibleTodos: selectTodos(state.todo.todos, state.todo.visibilityFilter),
    visibilityFilter: state.todo.visibilityFilter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActionCreators, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListView);
