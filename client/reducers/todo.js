import { combineReducers } from 'redux';

import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, REQUEST_TODOS, RECEIVE_TODOS } from '../constants/ActionTypes';
import { SHOW_ALL } from '../constants/VisibilityFilters';

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: action.completed,
          id: action.id
        }
      ];
    case COMPLETE_TODO:
      const index = state.findIndex(todo => todo.id === action.id);
      return [
        ...state.slice(0, index),
        Object.assign({}, state[index], { completed: true }),
        ...state.slice(index + 1)
      ];
    case RECEIVE_TODOS:
      return [
        ...state,
        ...action.todos
      ];
    default:
      return state;
  }
}

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

function isFetching(state = false, action) {
  switch (action.type) {
    case REQUEST_TODOS:
      return true;
    case RECEIVE_TODOS:
      return false;
    default:
      return state;
  }
}

export default combineReducers({
  todos,
  visibilityFilter,
  isFetching,
});
