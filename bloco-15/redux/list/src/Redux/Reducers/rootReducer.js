import { combineReducers } from "redux";
import { listItemAdd } from './listItemAdd';

const rootReducer = combineReducers({
  list: listItemAdd,
})

export default rootReducer;