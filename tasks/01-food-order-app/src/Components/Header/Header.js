import React from "react";
import Button from "../UI/Button/Button";
import style from './Header.module.css'
import cartSVG from '../icons/cart-shopping-solid.svg'

const Header = props => {

    const dummyOrders = 1

    return (
        <header className={style.back}>
        <div className={style.red}>
          <h2>ReactMeals</h2>
          <Button className={style.button}><img className={style.cart} src ={cartSVG} alt="cart icon"/>Your Cart <span className={style.orders}>{dummyOrders}</span></Button>
        </div>
      </header>
    )
}

export default Header