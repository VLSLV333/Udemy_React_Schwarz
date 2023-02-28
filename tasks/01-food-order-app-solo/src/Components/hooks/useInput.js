import { useState } from "react"

const useInput = (validationLogic) => {
    const [input, setInput] = useState("");
  const [inputTouched, setinputTouched] = useState(false);

  let inputValid = validationLogic(input)
  let inputTouchedWrong = !inputValid && inputTouched;

  const inputChangeHandler = (event) => {
    setInput(event.target.value);
  };

  const inputBlurHandler = () => {
    setinputTouched(true);
  };

  const resetHandler = () => {
    setInput('');
    setinputTouched(false);
  }

  return {input, inputValid, inputTouchedWrong, inputChangeHandler, inputBlurHandler, resetHandler}
}

export default useInput