import { combineReducers } from 'redux';

import * as types from '../constants/ActionTypes';
import { SHOW_ALL } from '../constants/VisibilityFilters';

function todos(state = [], action) {
  switch (action.type) {
    case types.ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: action.completed,
          id: action.id,
        },
      ];
    case types.COMPLETE_TODO: {
      const index = state.findIndex(todo => todo.id === action.id);
      return [
        ...state.slice(0, index),
        { ...state[index], completed: true },
        ...state.slice(index + 1),
      ];
    }
    case types.RECEIVE_TODOS:
      return [
        ...state,
        ...action.todos,
      ];
    default:
      return state;
  }
}

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case types.SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

function isFetching(state = false, action) {
  switch (action.type) {
    case types.REQUEST_TODOS:
      return true;
    case types.RECEIVE_TODOS:
      return false;
    case types.FETCHING:
      return true;
    case types.FETCH_SUCCESSFUL:
      return false;
    case types.FETCH_FAILED:
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
