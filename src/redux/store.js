import { ACTION_INCREMENT, ACTION_DECREMENT } from "./actionTypes";

import { createStore } from "redux";

const initialState = {
  counter: 0
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case ACTION_DECREMENT:
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};

export const store = createStore(counterReducer);
