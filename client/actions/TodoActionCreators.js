import * as types from './ActionTypes';

export function addTodo(text) {
  return { type: types.ADD_TODO, text };
}

export function completeTodo(index) {
  return { type: types.COMPLETE_TODO, index };
}

export function setVisibilityFilter(filter) {
  return { type: types.SET_VISIBILITY_FILTER, filter };
}
