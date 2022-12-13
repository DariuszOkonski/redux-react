import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import loggingReducer from "./loggingReducer";

const rootReducers = combineReducers({
  loggingReducer,
  counterReducer,
});

export default rootReducers;
