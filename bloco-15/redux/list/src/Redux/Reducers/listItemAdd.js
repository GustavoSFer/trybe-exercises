import { ADD_ITEM } from '../Actions';

const initial_state = [];

export function listItemAdd(state = initial_state, action) {
  switch(action.type) {
    case ADD_ITEM:
    return [...initial_state, action.value];
    default:
      return state;
  }
}