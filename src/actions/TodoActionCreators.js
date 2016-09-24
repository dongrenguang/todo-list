import TodoService from '../api/TodoService';
import * as types from '../constants/ActionTypes';

// Async Action: using redux-promise middleware.
export async function addTodo(text, completed = false) { // eslint-disable-line react/require-extension
  try {
    const id = await TodoService.getInstance().createTodo({ text, completed });
    return { type: types.ADD_TODO, text, completed, id };
  }
  catch(error) {
    console.error(error);
  }
}

// Async Action: using custom callAPI middleware.
export function toggleTodo(id) {
  return {
    types: {
      requestTypes: types.FETCHING,
      successTypes: [types.FETCH_SUCCESSFUL, types.TOGGLE_TODO],
      failureTypes: types.FETCH_FAILED,
    },
    callAPI: () => TodoService.getInstance().toggleTodo(id),
    payload: { id },
  };
}

// Sync Action.
export function setVisibilityFilter(filter) {
  return { type: types.SET_VISIBILITY_FILTER, filter };
}

// Inner Action.
function requestTodos() {
  return { type: types.REQUEST_TODOS };
}

// Inner Action.
function receiveTodos(todos) {
  return { type: types.RECEIVE_TODOS, todos };
}

// Async Action: using redux-thunk middleware.
export function initTodos() {
  return dispatch => {
    dispatch(requestTodos());
    TodoService.getInstance().fetchTodos().then(todos => dispatch(receiveTodos(todos)));
  };
}
