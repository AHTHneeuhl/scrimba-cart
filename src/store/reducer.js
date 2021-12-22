import {
  INCREMENT,
  DECREMENT,
  CLEAR_CART,
  REMOVE,
  GET_TOTALS,
} from "./actions";

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
    let tempCart;
    if (action.payload.amount === 1) {
      tempCart = state.cart.filter((item) => item.id !== action.payload.id);
    } else {
      tempCart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item = { ...item, amount: item.amount - 1 };
        }
        return item;
      });
    }

    return { ...state, cart: tempCart };
  } else if (action.type === INCREMENT) {
    let tempCart = state.cart.map((item) => {
      if (item.id === action.payload.id) {
        item = { ...item, amount: item.amount + 1 };
      }
      return item;
    });

    return { ...state, cart: tempCart };
  } else if (action.type === REMOVE) {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload.id),
    };
  } else if (action.type === GET_TOTALS) {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = price * amount;
        cartTotal.total += itemTotal;
        cartTotal.amount += amount;
        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    return { ...state, total, amount };
  }
  return state;
};

export default reducer;
