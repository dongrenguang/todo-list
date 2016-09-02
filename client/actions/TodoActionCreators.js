import * as types from './ActionTypes';

function addTodo(text) {
  return { type: types.ADD_TODO, text }
}

function completeTodo(index) {
  return { type: types.COMPLETE_TODO, index }
}

function setVisibilityFilter(filter) {
  return { type: types.SET_VISIBILITY_FILTER, filter }
}

export { addTodo, completeTodo, setVisibilityFilter };
