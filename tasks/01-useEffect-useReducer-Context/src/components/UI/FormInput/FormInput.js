import React, { useRef, useImperativeHandle } from "react";
import classes from "./FormInput.module.css";

const FormInput = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      //  activate = function above const activate = ...
      inputActivator: activate,
    };
  });

  return (
    <div
      className={`${classes.control} ${
        props.validState === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.htmlFor}>{props.label}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});

export default FormInput;
