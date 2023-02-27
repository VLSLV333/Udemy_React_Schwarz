import { useReducer } from "react"

const initialInputState = {
    value: '',
    touched: false
}

const inputStateReducer = (state, action) => {
    if (action.name === 'INPUT_CHANGED'){
        return {value:action.value, touched: state.touched}
    } 
    if (action.name === 'INPUT_BLURED'){
        return {value: state.value, touched: true}
    }
    if (action.name === 'INPUT_RESTART'){
        return {value: '', touched: false}
    }
    return initialInputState
}

const useMyInput = (validationLogic) => {
    const [inputState, dispatchInputStateReducer] = useReducer(inputStateReducer, initialInputState)

    const inputChangeHandler = (event) => {
        dispatchInputStateReducer({value: event.target.value, name: 'INPUT_CHANGED'})
    }
    const inputBlurHandler = (event) => {
        dispatchInputStateReducer({name: 'INPUT_BLURED'})
    }
    const restart = () => {
        dispatchInputStateReducer({name: 'INPUT_RESTART'})
    }
    let inputValid = validationLogic(inputState.value)
    let errorInInput = !inputValid && inputState.touched

    return {inputValue: inputState.value, inputValid, errorInInput, inputChangeHandler, inputBlurHandler, restart}
}

export default useMyInput