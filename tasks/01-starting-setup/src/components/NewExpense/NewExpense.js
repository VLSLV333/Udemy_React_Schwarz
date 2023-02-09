import React, { useState } from "react"
import './NewExpense.css'
import Card from "../UI/Card"
import ExpenseForm from "./ExpenseForm"

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false)

    const saveExpenseData = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData)
        stopEditingHandler()    
    }

    const startEditingHandler = () => {
        setIsEditing(true)
    }

    const stopEditingHandler = () => {
        setIsEditing(false)
    }

    return (
        <Card className='new-expense'>
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && < ExpenseForm onStopEditing={stopEditingHandler} onSaveExpenseData={saveExpenseData}/>}
        </Card>
    )

}

export default NewExpense