
// IF your entire component changes entirely based on different conditions . Then use this approach 
// expenses list mn let kr ke islia kia the coz some part is changing only 

import React from "react"
import ExpenseItem from "./ExpenseItem"
import "./ListofExpenses.css"

const ListofExpenses = props =>{
    
    if (props.items.length===0) {
        return <h2 className="expenses-list__fallback">No expenses found</h2>
        
    }


  


    return(
     
        <ul className="expenses-list">
        {/* {filtered.length===0 ? <h1>no expense</h1> : <h1>hain</h1>} */}
      {props.items.map((item) => 
         (
          <ExpenseItem
            amount={item.amount}
            title={item.title}
            date={item.date}
            key={item.id}
          />
        )
      )}
    </ul>
    
    )
}

export default ListofExpenses