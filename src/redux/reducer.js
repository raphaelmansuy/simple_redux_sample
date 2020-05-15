import { ACTION_INCREMENT, ACTION_DECREMENT, ACTION_RESET } from "./actionTypes"

const initialState = {
  counter: 0,
}

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_INCREMENT:
      return { ...state, counter: state.counter + 1 }
    case ACTION_DECREMENT:
      return { ...state, counter: state.counter - 1 }
    case ACTION_RESET:
      return { ...state, counter: 0 }
    default:
      return state
  }
}
export default counterReducer
