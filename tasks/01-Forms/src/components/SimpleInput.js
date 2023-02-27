import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  // useRef is better in case we want only obtain inputed value on form submit!

  let {
    value: enteredName,
    isValid: nameValid,
    hasError: nameInputHasError,
    valueChangeHadler: nameInputChangeHandler,
    inputBlurHadler: nameInputBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  let {
    value: enteredEmail,
    isValid: emailValid,
    hasError: emailInputHasError,
    valueChangeHadler: emailInputChangeHandler,
    inputBlurHadler: emailInputBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  // provide validation logic

  let formIsValid = false;

  if (nameValid && emailValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    // if (!nameValid && !emailValid) {
    //   return;
    // }
    resetNameInput();
    resetEmailInput();

    console.log("test");

    // or a worse way to do it, because we manipulate directly the DOM
    // nameRef.current.value = ''
  };

  let nameStyles = nameInputHasError ? "form-control invalid" : "form-control";
  let emailStyles = emailInputHasError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameStyles}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
        />
        {nameInputHasError && 
          <p className="error-text">Name must not be empty!</p>
        }
      </div>
      <div className={emailStyles}>
        <label htmlFor="email">Your E-mail</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
        />
        {emailInputHasError &&
          <p className="error-text">Email must be valid!</p>
        }
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
