import { useState } from "react";

const SimpleInput = (props) => {

  // useRef is better in case we want only obtain inputed value on form submit!

  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  // provide validation logic
  const enteredNameIsValid = enteredName.trim() !== '';
  let formIsValid = false

    if (enteredNameIsValid){
      formIsValid = true
    } 

  const nameInputChangeHandler = (event) => {
    // useState is better in case we want to obtain inputed value on every key input.
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }
    setEnteredName("");
    setEnteredNameTouched(false)

    // or a worse way to do it, because we manipulate directly the DOM
    // nameRef.current.value = ''
  };

  let inputDynamicStyles = enteredNameIsValid
    ? "form-control"
    : enteredNameTouched
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={inputDynamicStyles}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
        />
        {!enteredNameIsValid && enteredNameTouched && (
          <p className="error-text">Name must not be empty!</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
