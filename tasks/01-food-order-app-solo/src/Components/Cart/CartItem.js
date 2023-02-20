import React, { useContext } from "react";
import Button from "../UI/Button/Button";
import style from "./CartItem.module.css";
import CartContext from "../store/cart-context";

const CartItem = (props) => {
    const context = useContext(CartContext)
    const plusHandler = () => {
        context.addToCart(props.item, props.price, 1, props.id)
    }
    const minusHandler = () => {
        context.removeFromCart(props.item)
    }
  return (
    <React.Fragment>
      <div className={style.item}>
        <div className={style.text}>
          <h2>{props.item}</h2>
          <p className={style.price}>${props.price}</p>
          <p className={style.quantity}>x {props.quantity}</p>
        </div>
        <div className={style.controls}>
            <Button className={style.button} onClick={minusHandler}>-</Button>
            <Button className={style.button} onClick={plusHandler}>+</Button>
        </div>
      </div>
      <hr className={style.hr}></hr>
    </React.Fragment>
  );
};

export default CartItem;
