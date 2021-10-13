import { combineReducers } from "redux";
import reducer from "./index";

const rootReducer = combineReducers({
  list: reducer,
});

export default rootReducer;
