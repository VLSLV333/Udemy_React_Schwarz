import { useState } from "react"

const useMyInput = (validationLogic) => {
    const [inputValue, setInputValue] = useState('')
    const [inputTouched, setInputTouched] = useState(false)
    const inputChangeHandler = (event) => {
        setInputValue(event.target.value)
    }
    const inputBlurHandler = (event) => {
        setInputTouched(true)
    }
    const restart = () => {
        setInputValue('')
        setInputTouched(false)
    }
    let inputValid = validationLogic(inputValue)
    let errorInInput = !inputValid && inputTouched
    
    return {inputValue, inputValid, errorInInput, inputChangeHandler, inputBlurHandler, restart}
}

export default useMyInput