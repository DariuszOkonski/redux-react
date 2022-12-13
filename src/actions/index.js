import { DECREMENT, INCREMENT, SIGN_IN, SIGN_OUT } from "../constants";

export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

export const signIn = () => {
  return {
    type: SIGN_IN,
    payload: true,
  };
};

export const sighOut = () => {
  return {
    type: SIGN_OUT,
    payload: false,
  };
};
