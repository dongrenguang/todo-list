import TodoService from '../service/TodoService';
import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, REQUEST_TODOS, RECEIVE_TODOS } from '../constants/ActionTypes';

export async function addTodo(text, completed = false) {
  try {
    const id = await TodoService.getInstance().createTodo({ text, completed });
    return { type: ADD_TODO, text, completed, id };
  }
  catch(error) {
    console.error(error);
  }
}

export async function completeTodo(id) {
  try {
    await TodoService.getInstance().completeTodo(id);
    return { type: COMPLETE_TODO, id };
  }
  catch(error) {
    console.error(error);
  }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter };
}

function requestTodos() {
  return { type: REQUEST_TODOS };
}

function receiveTodos(todos) {
  return { type: RECEIVE_TODOS, todos };
}

export function initTodos() {
  return dispatch => {
    dispatch(requestTodos());
    TodoService.getInstance().fetchTodos().then(todos => {
      dispatch(receiveTodos(todos));
    });
  };
}
