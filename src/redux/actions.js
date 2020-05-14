import { ACTION_INCREMENT, ACTION_DECREMENT } from "./actionTypes";

export const inc = () => {
  return { type: ACTION_INCREMENT };
};
export const dec = () => {
  return { type: ACTION_DECREMENT };
};
