import React, { useState } from "react";
import Card from "../UI/Card";
import ButtonX from "./Button";

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";


const ExpenseItem = (props) => {
  console.log("ExpenseItem evaluated by react");
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("updated!!!!!");
    console.log(props.title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">Rs={props.amount}/-</div>
      </div>
      <ButtonX clickHandler={clickHandler} />

    </Card>
  );
};

export default ExpenseItem;
