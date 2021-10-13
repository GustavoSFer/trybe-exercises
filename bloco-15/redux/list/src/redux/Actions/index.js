export const ADD_ITEM_LISTA = 'ADD_ITEM_LISTA';
export const addList = (value) => ({
  type: ADD_ITEM_LISTA,
  payload: {
    value,
  }
});