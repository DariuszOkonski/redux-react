import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import historyReducer from "./historyReducer";
import loggingReducer from "./loggingReducer";

const rootReducers = combineReducers({
  loggingReducer,
  counterReducer,
  historyReducer,
});

export default rootReducers;
