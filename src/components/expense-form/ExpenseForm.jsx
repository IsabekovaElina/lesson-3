import React, { useState } from "react";
import Button from "../UI/Button/Button/Button";
// import FormInput from "./components/UI/FormInput/FormInput";
import FormInput from '../UI/Button/FormInput/FormInput'
// import "/ExpenseForm.css";

export const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const enabled = title.length > 0 && price.length > 0 && date.length > 0;
  const cancelHandler = (event) => {
    event.preventDefault();
    props.onShowForm();
  };

  const saveHandler = (event) => {
    event.preventDefault();
    const expenseDate = {
      title,
      price,
      date,
    };
    props.onNewExpenseAdd(expenseDate);
    setTitle("");
    setPrice("");
    setDate("");
  };
  const titleInputChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const priceInputChangeHandler = (event) => {
    setPrice(event.target.value);
  };
  const dateInputChangeHandler = (event) => {
    setDate(event.target.value);
  };

  return (
    <form className="form">
      <FormInput
        id="name"
        labelName="Назвние"
        inputType="text"
        placeholder="Введите название"
        value={title}
        onChange={titleInputChangeHandler}
      />

      <FormInput
        id="price"
        labelName="Amount of money"
        inputType="number"
        value={price}
        onChange={priceInputChangeHandler}
      />

      <FormInput
        id="date"
        labelName="Date"
        inputType="date"
        placeholder="дд.мм.гггг"
        value={date}
        onChange={dateInputChangeHandler}
      />
      <div className="button">
        <Button
         title="Cancel"
          onClick={cancelHandler} />
        <Button title="Save" onClick={saveHandler} disabled={!enabled} />
      </div>
    </form>
  );
};

// export default ExpenseForm;
