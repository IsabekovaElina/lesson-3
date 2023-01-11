import React, { useState } from "react";
import { ExpenseForm } from "../expense-form/ExpenseForm";
import Button from "../UI/Button/Button/Button";
// import ExpenseForm  from "../expense-form/ExpenseForm";
import "./NewExpenses.css"

 const NewExpenses = ({onNewExpenseAdd}) => {
  const [showForm , setShowForm] = useState(false);
  const showExpenseForm = () => {
    setShowForm((prevstate) => {
      return ! prevstate
    })
  };
    return (
    <div className="newexpence">
      {showForm ? (
        <ExpenseForm  onShowForm={showExpenseForm} 
        onNewExpenseAdd={onNewExpenseAdd}/>
      ) : (
        <Button
          title="Add new rashod"
          onClick={showExpenseForm} />
          // < NewExpense /> 
      )}
    </div>
  );
};

export default NewExpenses;