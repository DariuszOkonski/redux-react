import {
  DECREMENT_BY_NUMBER,
  DECREMENT_ONE,
  INCREMENT_BY_NUMBER,
  INCREMENT_ONE,
  DISPLAY_ON,
  DISPLAY_OFF,
  CLEAR_COUNTER,
} from "../constants";

const counterState = {
  counter: 0,
  numberOfEvents: 0,
  isDisplayed: true,
};

const counterReducer = (state = counterState, action) => {
  switch (action.type) {
    case CLEAR_COUNTER:
      return {
        ...state,
        counter: 0,
        numberOfEvents: 0,
      };
    case INCREMENT_ONE:
      return {
        ...state,
        counter: state.counter + 1,
        numberOfEvents: state.numberOfEvents + 1,
      };
    case DECREMENT_ONE:
      return {
        ...state,
        counter: state.counter - 1,
        numberOfEvents: state.numberOfEvents + 1,
      };
    case INCREMENT_BY_NUMBER:
      return {
        ...state,
        counter: state.counter + action.payload,
        numberOfEvents: state.numberOfEvents + 1,
      };
    case DECREMENT_BY_NUMBER:
      return {
        ...state,
        counter: state.counter - action.payload,
        numberOfEvents: state.numberOfEvents + 1,
      };
    case DISPLAY_ON: {
      return {
        ...state,
        isDisplayed: true,
      };
    }
    case DISPLAY_OFF: {
      return {
        ...state,
        isDisplayed: false,
      };
    }
    default:
      return state;
  }
};

export default counterReducer;
