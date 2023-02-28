import React, { useContext, useState } from "react";
import style from "./CartForm.module.css";
import CartContext from "../store/cart-context";
import Button from "../UI/Button/Button";
import useInput from "../hooks/useInput";

const CartForm = () => {
  const context = useContext(CartContext);

  let totalPrice =
    Math.round(
      (context.cart
        .map((food) => +food.quantity * +food.price)
        .reduce((acc, val) => acc + val, 0) +
        Number.EPSILON) *
        100
    ) / 100;

  const [radio, setRadio] = useState(false);

  const radioHandler = (event) => {
    setRadio(event.target.value);
  };

  const {
    input: nameInput,
    inputValid: nameInputValid,
    inputTouchedWrong: nameTouchedWrong,
    inputChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    resetHandler: nameResetHandler,
  } = useInput((value) => value.trim().length > 4);

  const {
    input: phoneInput,
    inputValid: phoneInputValid,
    inputTouchedWrong: phoneTouchedWrong,
    inputChangeHandler: phoneInputChangeHandler,
    inputBlurHandler: phoneInputBlurHandler,
    resetHandler: phoneResetHandler,
  } = useInput((value) => value.trim().length > 9);
  // regex for phones = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/

  const {
    input: cityInput,
    inputValid: cityInputValid,
    inputTouchedWrong: cityTouchedWrong,
    inputChangeHandler: cityInputChangeHandler,
    inputBlurHandler: cityInputBlurHandler,
    resetHandler: cityResetHandler,
  } = useInput((value) => value.trim().length > 3);

  const {
    input: streetInput,
    inputValid: streetInputValid,
    inputTouchedWrong: streetTouchedWrong,
    inputChangeHandler: streetInputChangeHandler,
    inputBlurHandler: streetInputBlurHandler,
    resetHandler: streetResetHandler,
  } = useInput((value) => value.trim().length > 3);

  const {
    input: appartsInput,
    inputValid: appartsInputValid,
    inputTouchedWrong: appartsTouchedWrong,
    inputChangeHandler: appartsInputChangeHandler,
    inputBlurHandler: appartsInputBlurHandler,
    resetHandler: appartsResetHandler,
  } = useInput((value) => value.trim().length > 3);

  let formValid = false;

  if (
    radio &&
    nameInputValid &&
    phoneInputValid &&
    cityInputValid &&
    streetInputValid &&
    appartsInputValid
  ) {
    formValid = true;
  }

  const orderHandler = (event) => {
    event.preventDefault();
    // this function needs to pull information from form and give it to cart-context. Also give total price to context.
    // context will have food name and quantity in it! (context.cart)

    //this function handels orders in context
    context.order({name : nameInput, phone: phoneInput, city: cityInput, street: streetInput, apparts: appartsInput, totalPrice});

    nameResetHandler();
    phoneResetHandler();
    cityResetHandler();
    streetResetHandler();
    appartsResetHandler()
    setRadio(false)
  };

  let nameStyles = nameTouchedWrong ? style.wrong : "";
  let phoneStyles = phoneTouchedWrong ? style.wrong : "";
  let cityStyles = cityTouchedWrong ? style.wrong : "";
  let streetStyles = streetTouchedWrong ? style.wrong : "";
  let appartsStyles = appartsTouchedWrong ? style.wrong : "";

  return (
    <form className={style.form} onSubmit={orderHandler}>
      <h3>Personal information</h3>

      <label htmlFor="full-name" className={nameStyles}>
        Full name
      </label>
      <input
        id="full-name"
        type="text"
        value={nameInput}
        onChange={nameInputChangeHandler}
        className={nameStyles}
        onBlur={nameInputBlurHandler}
      />

      <label htmlFor="phone" className={phoneStyles}>
        Phone number
      </label>
      <input
        id="phone"
        type="number"
        value={phoneInput}
        onChange={phoneInputChangeHandler}
        className={phoneStyles}
        onBlur={phoneInputBlurHandler}
      />

      <h3>Delivery information</h3>
      <label htmlFor="city" className={cityStyles}>
        City
      </label>
      <input
        id="city"
        type="text"
        value={cityInput}
        onChange={cityInputChangeHandler}
        className={cityStyles}
        onBlur={cityInputBlurHandler}
      />

      <label htmlFor="street" className={streetStyles}>
        Street
      </label>
      <input
        id="street"
        type="text"
        value={streetInput}
        onChange={streetInputChangeHandler}
        className={streetStyles}
        onBlur={streetInputBlurHandler}
      />

      <label htmlFor="apparts" className={appartsStyles}>
        Apparts
      </label>
      <input
        id="apparts"
        type="text"
        value={appartsInput}
        onChange={appartsInputChangeHandler}
        className={appartsStyles}
        onBlur={appartsInputBlurHandler}
      />

      <h3>Method of payment</h3>
      <input
        type="radio"
        id="cash"
        className={style.radio}
        name="pay"
        value={"cash"}
        onChange={radioHandler}
      ></input>
      <label htmlFor="cash" className={style.radio}>
        Cash
      </label>
      <br></br>
      <input
        type="radio"
        className={style.radio}
        id="card-site"
        name="pay"
        value={"card-site"}
        onChange={radioHandler}
      ></input>
      <label htmlFor="card-site" className={style.radio}>
        Card on site
      </label>
      <br></br>
      <input
        type="radio"
        className={style.radio}
        id="card-home"
        name="pay"
        value={"card-home"}
        onChange={radioHandler}
      ></input>
      <label htmlFor="card-home" className={style.radio}>
        Card on receiving
      </label>
      <div className={style.total}>
        <h2>Total Amount</h2>
        <p>${totalPrice}</p>
      </div>
      <div className={style.buttons}>
        <Button
          type="button"
          onClick={context.closeCart}
          className={`${style.button} ${style.close}`}
        >
          Close
        </Button>
        <Button className={style.button} type="submit" disabled={!formValid}>
          Order
        </Button>
      </div>
    </form>
  );
};

export default CartForm;
