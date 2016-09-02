import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER } from '../actions/ActionTypes';
import { VisibilityFilters } from '../constants';

const { SHOW_ALL } = VisibilityFilters;

function todos(state, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];
    case COMPLETE_TODO:
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          completed: true
        }),
        ...state.slice(action.index + 1)
      ];
    default:
      return state;
  }
}

function visibilityFilter(state, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

const initialState = {
  todos: [],
  visibilityFilter: SHOW_ALL,
};
export default function(state = initialState, action) {
  console.log(state, action);
  switch (action.type) {
    case ADD_TODO:
    case COMPLETE_TODO:
     return Object.assign({}, state, { todos: todos(state.todos, action) });
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, { visibilityFilter: visibilityFilter(state.visibilityFilter) });
    default:
      return state;
  }
}
