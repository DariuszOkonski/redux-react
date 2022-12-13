import { INCREMENT_HISTORY_LIST, CLEAR_HISTORY_LIST } from "../constants";

const historyState = {
  historyList: [],
};

const historyReducer = (state = historyState, action) => {
  switch (action.type) {
    case INCREMENT_HISTORY_LIST:
      return {
        ...state,
        historyList: [...state.historyList, action.payload],
      };
    case CLEAR_HISTORY_LIST:
      return {
        ...state,
        historyList: [],
      };

    default:
      return state;
  }
};

export default historyReducer;
