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
  cart: cartItems,
  total: 0,
  amount: 0,
};

// store - store data, think of state
const store = createStore(reducer, initialState);

function App() {
  // cart setup

  return (
    <main>
      <Navbar />
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;
