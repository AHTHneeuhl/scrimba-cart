// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// action variables
import { INCREMENT, DECREMENT } from "./actions";

// redux stuff
import { createStore } from "redux";

// initial state
const initialState = {
  count: 3,
  name: "john",
};

// reducer - function that used to update state
// take two parameters - state, action
// state - previous state
// action - what state to update
// return previous state or updated state
// DON'T MUTATE the STATE - redux built on immutability
const reducer = (state, action) => {
  console.log({ state, action });
  if (action.type === DECREMENT) {
    return { ...state, count: state.count - 1 };
  } else if (action.type === INCREMENT) {
    return { ...state, count: state.count + 1 };
  }
  return state;
};

// store - store data, think of state
const store = createStore(reducer, initialState);
store.dispatch({ type: DECREMENT });
store.dispatch({ type: INCREMENT });
console.log(store.getState());

function App() {
  // cart setup

  return (
    <main>
      <Navbar cart={store.getState()} />
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;
