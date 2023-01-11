import React from "react";
import ExpenseItem from "../expense-item/ExpenseItem";
import "./Expenses.css";

const Expenses = ({ expenses }) => {
  return (
    <ul className="ul">
      {expenses.map((elem, i) => {
        return (
          <ExpenseItem
            key={elem.i}
            title={elem.title}
            price={elem.price}
            date={elem.date}
          />
        );
      })}
    </ul>
  );
};
export default Expenses;
