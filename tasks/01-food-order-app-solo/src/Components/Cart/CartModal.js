import React, { useContext } from "react";
import CartContext from "../store/cart-context";
import CartItem from "./CartItem";
import style from "./CartModal.module.css";
import CartForm from "./CartForm";

const CartModal = (props) => {
  const context = useContext(CartContext);
  let cartFull = !!context.cart.length;
  let justOrdered = context.justOrdered

  return (
    <div className={style.modal}>
      {!cartFull && !justOrdered && <p className={style.empty}>Please, make Your order=)</p>}
      {justOrdered && <p className={style.empty}>Thank you for Your order=)</p>}
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
          <CartForm/>
        </React.Fragment>
      )}
    </div>
  );
};

export default CartModal;
