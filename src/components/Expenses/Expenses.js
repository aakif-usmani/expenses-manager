import React from "react";
import { useState } from "react/cjs/react.development";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from '../UI/Card';
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';


const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear)
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContant = <p>No Expense Found.</p>;
  if (filteredExpenses.length > 0) {
    expensesContant = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
      
    ))
  };




  return (
    <div >
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        { expensesContant }
      </Card>
    </div>);
};

export default Expenses;


