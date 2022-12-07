// we can return conditionlly
import React, { useState } from 'react';

import "./ExpensesList.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ListofExpenses from './ListofExpenses';
import ExpensesChart from './ExpensesChart';
// import "./UserItem.css"

const ExpensesList = (props) => {
    const [filteredYear,setFilteredYear] = useState('2021')
    
  const SelectedFilterHandler = (year)=>{
      setFilteredYear(year)
      console.log("Nabiha");
      console.log(filteredYear)
      
    }
    const filtered = props.items.filter((expense)=>expense.date.getFullYear().toString()===filteredYear)


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear}SelectedFilter={SelectedFilterHandler}/>
        <ExpensesChart expenses={filtered}/>
        <ListofExpenses items={filtered}/>
       
      </Card>
    </div>
  );
};

export default ExpensesList;
