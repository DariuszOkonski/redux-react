import { SIGN_IN, SIGN_OUT } from "../constants";

const loggedReducer = (state = false, action) => {
  switch (action.type) {
    case SIGN_IN:
      return (state = action.payload);
    case SIGN_OUT:
      return (state = action.payload);
    default:
      return state;
  }
};

export default loggedReducer;
