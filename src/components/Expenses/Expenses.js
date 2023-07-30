import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";

const Expenses = (props) => { // props = {items: Array(4)}
  console.log("Expensens.js props", props.items); // Affiche le tableau des dépenses
  console.log(props.items[1].title);

  return (
    <Card className="expenses">
      {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      /> */}
      
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          amount={expense.amount}
          date={expense.date}
          title={expense.title}
        />
      ))}
    </Card>
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

