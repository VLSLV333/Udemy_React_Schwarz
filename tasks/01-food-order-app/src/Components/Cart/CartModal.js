import React, { useContext } from "react";
import CartContext from "../store/cart-context";
import Button from "../UI/Button/Button";
import CartItem from "./CartItem";
import style from "./CartModal.module.css";

const CartModal = (props) => {
  const context = useContext(CartContext);
  let cartFull = !!context.cart.length;

  let totalPrice = Math.round( (context.cart
    .map((food) => (+food.quantity * +food.price))
    .reduce((acc, val) => acc + val, 0) + Number.EPSILON) * 100) / 100;

  return (
    <div className={style.modal}>
      {!cartFull && <p className={style.empty}>Please, make Your order=)</p>}
      {cartFull && (
        <React.Fragment>
          {context.cart.map((food) => (
            <CartItem
              item={food.item}
              price={food.price}
              quantity={food.quantity}
              key={food.id}
              id={food.id}
            />
          ))}
          <div className={style.total}>
            <h2>Total Amount</h2>
            <p>${totalPrice}</p>
          </div>
          <Button onClick={context.closeCart} className={`${style.button} ${style.close}`}>Close</Button>
          <Button onClick={context.order} className={style.button}>Order</Button>
        </React.Fragment>
      )}
    </div>
  );
};

export default CartModal;
