import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TodoListView from '../components/TodoListView';
import * as TodoActionCreators from '../actions/TodoActionCreators';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/VisibilityFilters';

function selectTodos(todos, filter) {
  switch (filter) {
    case SHOW_ALL:
      return todos;
    case SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    case SHOW_ACTIVE:
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
