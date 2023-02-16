import React, { useContext } from "react";
import Header from "./Components/Header/Header";
import './App.css'
import Main from "./Components/Main/Main";
import Cart from "./Components/Cart/Cart";
import CartContext from "./Components/store/cart-context";

function App() {
  const context = useContext(CartContext)
  return (
    <React.Fragment>
      {context.cartStatus && <Cart/>}
      <Header/>
      <Main/>
    </React.Fragment>
  );
}

export default App;
