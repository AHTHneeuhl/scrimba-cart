import { INCREMENT, DECREMENT, CLEAR_CART } from "./actions";

// reducer - function that used to update state
// take two parameters - state, action
// state - previous state
// action - what state to update
// return previous state or updated state
// DON'T MUTATE the STATE - redux built on immutability
const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if (action.type === DECREMENT) {
    return { ...state, count: state.count - 1 };
  } else if (action.type === INCREMENT) {
    return { ...state, count: state.count + 1 };
  }
  return state;
};

export default reducer;
