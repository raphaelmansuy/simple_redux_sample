import { ACTION_INCREMENT, ACTION_DECREMENT, ACTION_RESET } from "./actionTypes"

export const inc = () => {
  return { type: ACTION_INCREMENT }
}
export const dec = () => {
  return { type: ACTION_DECREMENT }
}

export const reset = () => {
  return { type: ACTION_RESET }
}
