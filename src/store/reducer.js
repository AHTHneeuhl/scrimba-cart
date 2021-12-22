import { INCREMENT, DECREMENT, CLEAR_CART, REMOVE } from "./actions";

// reducer - function that used to update state
// take two parameters - state, action
// state - previous state
// action - what state to update
// return previous state or updated state
// DON'T MUTATE the STATE - redux built on immutability
const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  } else if (action.type === DECREMENT) {
    console.log("you decremented amount");
  } else if (action.type === INCREMENT) {
    console.log("you incremented amount");
  } else if (action.type === REMOVE) {
    console.log("you remove amount");
  }
  return state;
};

export default reducer;
