import React, { useContext } from "react";
import style from './Black.module.css'
import CartContext from "../store/cart-context";

const Black = props => {
    const context = useContext(CartContext)
    return (
      <div className={style.black} onClick={context.closeCart}></div>
    )
}

export default Black