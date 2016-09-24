import { combineReducers } from 'redux-immutable';
import Immutable, { List, Map } from 'immutable';

import * as types from '../constants/ActionTypes';
import { SHOW_ALL } from '../constants/VisibilityFilters';

function todoList(state = List(), action) {
  switch (action.type) {
    case types.ADD_TODO:
      return state.push(Map({
        text: action.text,
        completed: action.completed,
        id: action.id,
      }));
    case types.TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.get('id') === action.id) {
          return todo.update('completed', value => !value);
        }
        return todo;
      });
    case types.RECEIVE_TODOS:
      return Immutable.fromJS(action.todos);
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
  todoList,
  visibilityFilter,
  isFetching,
});
