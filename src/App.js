// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// action variables
import { INCREMENT, DECREMENT } from "./store/actions";

// redux stuff
import { createStore } from "redux";
import reducer from "./store/reducer";

// initial state
const initialState = {
  count: 3,
  name: "john",
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
