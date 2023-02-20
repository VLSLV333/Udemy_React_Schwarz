import React from "react";
import ReactDOM from "react-dom";
import Black from "./Black";
import CartModal from './CartModal'

const Cart = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Black />, document.getElementById("black"))}
      {ReactDOM.createPortal(<CartModal/>, document.getElementById('cart')) }
    </React.Fragment>
  );
};

export default Cart;
