import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  // Si les dépenses filtrées contiennent des éléments, mettre à jour le contenu

  if (props.items.length === 0) {
    // if empty
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          amount={expense.amount}
          date={expense.date}
          title={expense.title}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
