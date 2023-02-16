import React, { useContext, useEffect, useState } from "react";
import Button from "../UI/Button/Button";
import style from "./Header.module.css";
import cartSVG from "../icons/cart-shopping-solid.svg";
import CartContext from "../store/cart-context";

const Header = (props) => {
  let [itemAdded, setItemAdded] = useState(false)
  const context = useContext(CartContext);
  const [numberOfOrders, setNumberOfOrders] = useState(0)
  useEffect(() => {
    let acc = 0
    context.cart.forEach( item => acc += +item.quantity)
    setTimeout( () => {
      setItemAdded(false)
    }, 70)
    setNumberOfOrders(acc)
    return () => setItemAdded(true)
  }, [context.cart])  

  return (
    <header className={style.back}>
      <div className={style.red}>
        <h2>ReactMeals</h2>
        <Button className={`${style.button} ${itemAdded && style.buttonBig}`} onClick={context.removeFromCart}>
          <img className={style.cart} src={cartSVG} alt="cart icon" />
          Your Cart <span className={style.orders}>{numberOfOrders}</span>
        </Button>
      </div>
    </header>
  );
};

export default Header;
