import React from "react";
import "./ExpenseForm.css";
import { useState } from "react";

// const ExpenseForm = (event) => {
// const [userInput, setUserInput] = useState({
//   enteredTitle: "",
//   enteredAmount: "",
//   enteredDae: "",
// });

// const titleChangeHandler = (event) => {
//   setUserInput({
//     ...userInput,
//     enteredTitle: event.targer.value,
//   })
// };
// ----- mais plutot comme ca avce prevState ----
// setUserInput((prevState) => {
//   return { ...prevState, enteredTitle: event.target.value }
// })

// const amountChangeHandler = (event) => {
//   setUserInput ({
//     ...userInput,
//     enteredAmount: event.target.value,
//   })
// }

// const dateChangeHandler = (event) => {
//   setUserInput ({
//     ...userInput,
//     enteredDate: event.target.value,
//   })
// }

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const inputChangeHandler = (identifier, value) => {
  //   if (identifier === "title") {
  //     setEnteredTitle(value);
  //   } else if (identifier === "amount") {
  //     setEnteredAmount(value);
  //   } else if (identifier === "date") {
  //     setEnteredDate(value);
  //   }
  // }

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    console.log(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    console.log(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    console.log(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    console.log("click sur envoye expenseData deExpenseForm", expenseData); //
    props.onSaveExpenseData(expenseData); // ici j execute la fonction du composant NewExpense
    setEnteredTitle(""); //pour reinitialiser le champ apres l'envois du form, et rajouter value = dans le return
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Titre</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
          {/* <input type="text" onChange={(event) => inputChangeHandler("title", event.target.value)} /> */}
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
          {/* <input type="number" min="0.01" step="0.01" onChange={(event) => inputChangeHandler("amount", event.target.value)}/> */}
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
          {/* <input type="date" min="2019-01-01" max="2022-12-31" onChange={(event) => inputChangeHandler("date", event.target.value)}/> */}
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Ajouter une dépense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
