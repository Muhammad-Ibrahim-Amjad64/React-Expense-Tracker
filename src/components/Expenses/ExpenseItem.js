import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const amount = props.amount;
  const [title, settitle] = useState(props.title);
  const titleChangeHandler = () => {
    setTimeout(() => {
      settitle("Syeda Nabiha Jamali");
    }, 4000);
  };

  return (
      <li>
    <Card className="expense-item">

      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
   
        <div>
          <button onClick={titleChangeHandler}>click me </button>
        </div>
      </div>
    </Card>
      </li>
  );
};

export default ExpenseItem;
