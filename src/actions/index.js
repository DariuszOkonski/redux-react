import { DECREMENT, INCREMENT, SIGN_IN, SIGN_OUT } from "../constants";

export const increment = (number) => {
  return {
    type: INCREMENT,
    payload: number,
  };
};

export const decrement = (number) => {
  return {
    type: DECREMENT,
    payload: number,
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
