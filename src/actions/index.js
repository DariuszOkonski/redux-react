import {
  CLEAR_COUNTER,
  CLEAR_HISTORY_LIST,
  DECREMENT_BY_NUMBER,
  DECREMENT_ONE,
  DISPLAY_OFF,
  DISPLAY_ON,
  INCREMENT_BY_NUMBER,
  INCREMENT_HISTORY_LIST,
  INCREMENT_ONE,
  SIGN_IN,
  SIGN_OUT,
} from "../constants";

export const signIn = () => {
  return {
    type: SIGN_IN,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const incrementOne = () => {
  return {
    type: INCREMENT_ONE,
  };
};

export const decrementOne = () => {
  return {
    type: DECREMENT_ONE,
  };
};

export const incrementByNumber = (number) => {
  return {
    type: INCREMENT_BY_NUMBER,
    payload: number,
  };
};

export const decrementByNumber = (number) => {
  return {
    type: DECREMENT_BY_NUMBER,
    payload: number,
  };
};

export const displayOn = () => {
  return {
    type: DISPLAY_ON,
  };
};

export const displayOff = () => {
  return {
    type: DISPLAY_OFF,
  };
};

export const incrementHistoryList = (number) => {
  return {
    type: INCREMENT_HISTORY_LIST,
    payload: number,
  };
};

export const clearHistoryList = () => {
  return {
    type: CLEAR_HISTORY_LIST,
  };
};

export const clearCounter = () => {
  return {
    type: CLEAR_COUNTER,
  };
};
