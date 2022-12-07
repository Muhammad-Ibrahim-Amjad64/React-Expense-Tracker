
import React, { useState } from "react"
import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm"
const NewExpense = props =>{

    const [showForm,setShowForm]=useState(false)

    const NewExpensedataHandler =(newExpense)=>{
        const NewExpensedata = {
            ...newExpense,
            id:Math.random().toString()
        }
        setShowForm(false)
        console.log(NewExpensedata,"ye wala")
        props.NewExpensedata(NewExpensedata);
    }


   

    const showHandler = ()=>{
        setShowForm(true)

    }

    const formCancelHandler = ()=>{
        setShowForm(false)
    }

    return(
        <div className="new-expense">
            {!showForm &&<button onClick={showHandler}><b> Add new expense</b></button>}
            {showForm &&<ExpenseForm formCancel={formCancelHandler} NewExpensedata={NewExpensedataHandler}/>}

     
        
        </div>
    )
}

export default NewExpense
