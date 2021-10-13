import { ADD_ITEM_LISTA } from '../Actions'

const estado_inicial = [];

function reducer(state = estado_inicial, action) {
  switch(action.type){
    case ADD_ITEM_LISTA:
      return [...state, action.value];
    default:
      return state;
  }
}

export default reducer;