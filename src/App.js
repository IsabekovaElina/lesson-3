import { useState } from "react";
import "./App.css";
import Expenses from "./components/expenses/Expenses";
import NewExpenses from "./components/new-expenses/NewExpenses";


function App(){
const  [expenses, setExpenses] = useState([
  {
    title: "Toilet paper",
    price: 300,
    date: new Date(),
  },
  {
    title: "Зарядник",
    price: 400,
    date: new Date(),
  },
]);
const addNewExpenseHandler =(data) => {
  const upExpenses = [...expenses];
  upExpenses.push(data)
  setExpenses(upExpenses)
}

  return (
    <div className="apps">
      <div className="items">
        <NewExpenses onNewExpenseAdd={addNewExpenseHandler}/>
        <Expenses expenses={expenses} />
      </div>
    </div>
  );
  }

export default App;
