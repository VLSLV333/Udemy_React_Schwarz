import React, { useState } from "react";
import Button from "../UI/Button";
import style from './UserForm.module.css'

const UserForm = props => {

    const [nameInput, setNameInput] = useState('')
    const [ageInput, setAgeInput] = useState('')

    const nameInputHandler = event => {
        setNameInput(event.target.value)
    }

    const ageInputHandler = event => {
        setAgeInput(event.target.value)
    }

    const formHandler = event => {
        event.preventDefault()
        if (nameInput.trim().length === 0 || ageInput.trim().length === 0) {
          props.invalidHandler('empty')
          return
        }  else if (Number(ageInput) <= 0){
          props.invalidHandler('low age')
          return
        }

        let newUser = {
            name: nameInput,
            age: ageInput.toString(),
            id: Math.random().toString()
        }
        props.addHandler(newUser)
        setNameInput('')
        setAgeInput('')
    }

  return (
    <form onSubmit={formHandler} className={style.form}>
      <label htmlFor='userName'>Username</label>
      <input type="text" onChange={nameInputHandler} value={nameInput} id='userName'></input>
      <label htmlFor='userAge'>Age (Years)</label>
      <input type="number" onChange={ageInputHandler} value={ageInput} id='userAge'></input>
      <Button type='submit'>Add User</Button>
    </form>
  );
};

export default UserForm;