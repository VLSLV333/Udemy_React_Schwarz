import { useEffect, useState, useRef } from 'react'

const SimpleInput = (props) => {
  const nameRef = useRef('')
  // useRef is better in case we want only obtain inputed value on form submit!

  const [enteredName, setEnteredName] = useState('')
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false)
  const [enteredNameTouched, setEnteredNameTouched] = useState(false)


  useEffect( () => {
    if (enteredNameIsValid) {
      console.log('This logs on loading of page, tho user has not provided ANY input yet!')
    }
  }, [enteredNameIsValid])

  const nameInputChangeHandler = event => {
    // useState is better in case we want to obtain inputed value on every key input.
    
    // every keystroke logic
    if (enteredNameTouched && enteredName.trim().length >= 5) {
      console.log('gere')
      setEnteredNameIsValid(true)
    }

    setEnteredName(event.target.value)
    // console.log(nameRef.current.value)
  }

  const nameInputBlurHandler = event => {

    setEnteredNameTouched(true)
    if (enteredName.trim().length < 5){
      setEnteredNameIsValid(false)
      return
    } else {
      setEnteredNameIsValid(true)
    }

  }

  const formSubmissionHandler = event => {
    event.preventDefault()
    setEnteredNameTouched(true)

    if (enteredName.trim().length < 5){
      setEnteredNameIsValid(false)
      return
    }

    setEnteredNameIsValid(true)
    setEnteredName('')
    // or a worse way to do it, because we manipulate directly the DOM
    // nameRef.current.value = ''

    console.log(enteredName)
    console.log(nameRef)
  }

  let inputDynamicStyles = enteredNameIsValid ? 'form-control' : enteredNameTouched ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={inputDynamicStyles}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' value={enteredName} onChange={nameInputChangeHandler} ref={nameRef} onBlur={nameInputBlurHandler}/>
        {!enteredNameIsValid && enteredNameTouched && <p className='error-text'>Name must not be empty!</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
