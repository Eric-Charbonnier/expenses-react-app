import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import ExpensesList from "./ExpensesList";

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
        <ExpensesList items={filteredExpenses}/>

        {/* {filteredExpenses.length === 0 && <p>No expenses found.</p>}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              amount={expense.amount}
              date={expense.date}
              title={expense.title}
            />
          ))} */}

        {/* {filteredExpenses.length === 0 ? (
          <p>No expenses found.</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              amount={expense.amount}
              date={expense.date}
              title={expense.title}
            />
          ))
        )} */}
      </Card>
    </div>
  );
};

export default Expenses;

// function Expenses(props) {
//   console.log(props.items); // Affiche le tableau des dépenses
//   return (
//     <div className="expenses">
//       {props.items.map((expense) => (
//         <ExpenseItem
//           key={expense.id}
//           amount={expense.amount}
//           date={expense.date}
//           title={expense.title}
//         />
//       ))}
//     </div>
//   );
// }

// function Expenses(props) {
//   return (
//     <div className="expenses">
//       <ExpenseItem
//         title={props.items[0].title}
//         amount={props.items[0].amount}
//         date={props.items[0].date}
//       />
//       <ExpenseItem
//         title={props.items[1].title}
//         amount={props.items[1].amount}
//         date={props.items[1].date}
//       />
//       <ExpenseItem
//         title={props.items[2].title}
//         amount={props.items[2].amount}
//         date={props.items[2].date}
//       />
//       <ExpenseItem
//         title={props.items[3].title}
//         amount={props.items[3].amount}
//         date={props.items[3].date}
//       />
//     </div>
//   );
// }
