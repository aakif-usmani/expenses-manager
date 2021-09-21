import React from "react";

import ExpenseForm from "./ExpenseForm"
import "./NewExpense.css"

const NewExopense = (props) => {
  const onSaveExpenseDatahandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  // const onSaveExpenseDatahandler = (enteredExpenseData) => { 
  //   const expenseData = {
  //     ...enteredExpenseData,
  //     id: Math.random().toString()
  //   };
  //   console.log(expenseData);
  // };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveExpenseDatahandler} />
      {/* adding prop */}
    </div>
  );
};

export default NewExopense;