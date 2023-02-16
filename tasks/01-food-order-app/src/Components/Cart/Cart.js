import React, { useContext } from "react";
import CartContext from "../store/cart-context";
import Black from "./Black";
import style from './Cart.module.css'

const Cart = (props) => {
    const context = useContext(CartContext)
  return (
    <React.Fragment>
        <Black/>
      <div className={style.modal}>
        <div className="ordered item">
          <div>
            <h2>Food name</h2>
            <p className="inline-block">Price</p>
            <p className="inline-block">Quantity</p>
          </div>
          <div>
            <button>-</button>
            <button>+</button>
          </div>
          <hr></hr>
        </div>
        <div className="total">
          <h2>Total amount</h2>
          <p>$ total price</p>
        </div>
        <button onClick={context.closeCart}>Close</button>
        <button>Order</button>
      </div>
    </React.Fragment>
  );
};

export default Cart;
