import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  // const addExpenseHandler = (expense) => {
  //   console.log(expense);
  //   // setExpenses([expense, ...expenses]); premiere entree puis le reste mais on fait ci-dessous
  //   // cette fonction en argument va recevoir la derniere entree car elle recois une version anterieur du snapshot of the same state
  //   setExpenses((prevExpenses) => {
  //     return [expense, ...prevExpenses]
  //   }); 
  // };


















  function addExpenseHandler(expense) { // expense is the object that we receive from the child component
    setExpenses(function(prevExpenses) { // prevExpenses is the array that we receive from the state
      return [expense, ...prevExpenses]; // we return the new array with the new expense object and the previous expenses
    })
    
  }

  return (
    <div>
      {/* onAddExpense is a function pointer wich is past as an argument puis on ajout un pointer vers {addExpenseHandler} sans les () a la fin pour pas que ca s execute */}
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} /> 
    </div>
  );
}

export default App;
