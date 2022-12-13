import { SIGN_IN, SIGN_OUT } from "../constants";

const loggingState = {
  isLogged: false,
};

const loggingReducer = (state = loggingState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isLogged: true,
      };
    case SIGN_OUT:
      return {
        ...state,
        isLogged: false,
      };
    default:
      return state;
  }
};

export default loggingReducer;
