import React from "react";
import Button from "../UI/Button";
import style from './Modal.module.css'

const Modal = props => {

  return (
    <div className={style.modal}>
      <h1>Invalid input</h1>
      <p>{props.invalid}</p>
      <Button onClick={props.removeModal}>Okay</Button>
    </div>
  );
};

export default Modal;
