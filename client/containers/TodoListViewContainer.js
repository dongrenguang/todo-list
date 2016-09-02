import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TodoListView from '../components/TodoListView';
import * as TodoActionCreators from '../actions/TodoActionCreators';

function mapStateToProps(state) {
  console.log("container", state);
  return {
    visibleTodos: state.todo.todos,
    visibilityFilter: state.todo.visibilityFilter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActionCreators, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListView);
