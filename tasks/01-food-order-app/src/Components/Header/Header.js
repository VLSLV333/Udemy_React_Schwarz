import React from "react";
import Button from "../UI/Button/Button";
import style from './Header.module.css'

const Header = props => {
    const dummyOrders = 1

    return (
        <header className="background={ the food photo on the video }">
        <div className={style.red}>
          <h2>ReactMeals</h2>
          <Button className={style.button}>Your cart {dummyOrders}</Button>
        </div>
      </header>
    )
}

export default Header