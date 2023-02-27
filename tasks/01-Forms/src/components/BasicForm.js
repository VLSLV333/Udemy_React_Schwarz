import useMyInput from "../hooks/my-use-input";

const checkIfInputIsEmpty = (value) => value.trim() !== "";

const stylesForInputs = (state) => {
  return state ? "form-control invalid" : "form-control";
};

const BasicForm = (props) => {

  const {
    inputValue: nameInput,
    inputValid: nameValid,
    errorInInput: nameTouchedWithArror,
    inputChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    restart: restartNameInput,
  } = useMyInput(checkIfInputIsEmpty);

  const {
    inputValue: secondNameInput,
    inputValid: secondNameValid,
    errorInInput: secondNameTouchedWithArror,
    inputChangeHandler: secondNameInputChangeHandler,
    inputBlurHandler: secondNameInputBlurHandler,
    restart: restartSecondNameInput,
  } = useMyInput(checkIfInputIsEmpty);

  const {
    inputValue: emailInput,
    inputValid: emailValid,
    errorInInput: emailTouchedWithArror,
    inputChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    restart: restartEmailInput,
  } = useMyInput((value) => value.includes("@"));

  let nameInputStyle = stylesForInputs(nameTouchedWithArror);
  let secondNameInputStyle = stylesForInputs(secondNameTouchedWithArror);
  let emailInputStyle = stylesForInputs(emailTouchedWithArror);

  let formIsValid = false;
  if (nameValid && secondNameValid && emailValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    console.log(
      "We need to check here for formValidity again, becase user can set button to disable=false, using dev tools and then"
    );
    console.log('submit wrong inputs=)')

    if (!formIsValid){
      return
    }

    console.log('submited!')
    restartNameInput();
    restartSecondNameInput();
    restartEmailInput();
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={nameInputStyle}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={nameInputChangeHandler}
            onBlur={nameInputBlurHandler}
            value={nameInput}
          />
          {nameTouchedWithArror && (
            <p className="error-text">Please, enter Your name!</p>
          )}
        </div>
        <div className={secondNameInputStyle}>
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            value={secondNameInput}
            onChange={secondNameInputChangeHandler}
            onBlur={secondNameInputBlurHandler}
          />
          {secondNameTouchedWithArror && (
            <p className="error-text">Please, enter Your second name!</p>
          )}
        </div>
      </div>
      <div className={emailInputStyle}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          value={emailInput}
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
        />
        {emailTouchedWithArror && (
          <p className="error-text">Please, enter valid email!</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid} type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default BasicForm;
