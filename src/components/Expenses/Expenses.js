import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  // props = {items: Array(4)}
  console.log("Expensens.js props", props.items); // Affiche le tableau des dépenses
  // console.log(props.items[1].title);
  console.log(filteredYear);
  console.log(props.items);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log("Expense.js");
    console.log(selectedYear);
  };

  // if (isNaN(Number(filteredYear))) {
  //   console.log("filteredYear n'est pas un nombre");
  // } else {
  //   console.log("filteredYear est un nombre");
  // }

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  console.log("mes donnees par annee", filteredExpenses);


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;