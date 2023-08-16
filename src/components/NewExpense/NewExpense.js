import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData, // spread operator
      id: Math.random().toString(),
    };
    console.log("expenseData dans NewExpense", expenseData);
    console.trace(); // Cette ligne affiche la trace de la pile des appels de fonction
    props.onAddExpense(expenseData);
  };

  const startEditingHandler = () => {
    setEditing(true);
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>ADD NEW EXPENSE</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />}
    </div>
  );
};

export default NewExpense;
