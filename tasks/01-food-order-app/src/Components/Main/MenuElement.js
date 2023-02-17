import React, { useContext } from "react";
import CartContext from "../store/cart-context";
import style from "./MenuElement.module.css";
import Button from "../UI/Button/Button";

const MenuElement = (props) => {
  const context = useContext(CartContext);

  const formHandler = (event) => {
    event.preventDefault();
    const numberOfOrderedItems = event.target[0].value;
    context.addToCart(props.item, props.price, numberOfOrderedItems, props.id);
  };

  return (
    <React.Fragment>
      <div className={style.foodElem}>
        <div>
          <h2>{props.item}</h2>
          <p>
            <i>{props.description}</i>
          </p>
          <p className={style.price}>${props.price}</p>
        </div>
        <form className={style.form} onSubmit={formHandler}>
          <div className={style.controls}>
            <label>Amount</label>
            <input
              min={1}
              max={100}
              step={1}
              type={"number"}
              defaultValue={1}
            ></input>
          </div>
          <Button className={style.button} type="submit">+Add</Button>
        </form>
      </div>
      <hr></hr>
    </React.Fragment>
  );
};

export default MenuElement;
