import React from "react"
import './NewExpense.css'
import Card from "../UI/Card"
import ExpenseForm from "./ExpenseForm"

const NewExpense = (props) => {
    const saveExpenseData = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData)    
    }
    return (
        // <div className='new-expense'>
        // </div>
        <Card className='new-expense'>
            < ExpenseForm onSaveExpenseData={saveExpenseData}/>
        </Card>
    )

}

export default NewExpense