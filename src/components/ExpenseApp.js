import React, { useState } from "react";
const ExpenseTrackerApp = () => {
    const [expenses, setExpenses] = useState([]);
    const [totalExpenses, setTotalExpenses] = useState(0);
    const [categories] = useState([]);
  
    const addExpense = (e) => {
      e.preventDefault();
      const newExpense = {
        expense: e.target.elements.expense.value,
        amount: parseFloat(e.target.elements.amount.value),
        category: e.target.elements.category.value,
        done: false,
      };
      if (newExpense.amount < 0) {
        alert("Please enter a positive value for the amount.");
        return;
      }
      setExpenses([...expenses, newExpense]);
      setTotalExpenses(totalExpenses + newExpense.amount);
      const category = newExpense.category;
      if (!categories.includes(category)) {
        categories.push(category);
      }
    };
  
    const removeExpense = (index) => {
      setExpenses(expenses.slice(0, index).concat(expenses.slice(index + 1)));
      setTotalExpenses(totalExpenses - expenses[index].amount);
    };
  
    const editExpense = (index) => {
      const expense = expenses[index];
      setExpenses((expenses) => expenses.map((t) => t.id === expense.id ? { ...t, done: !t.done } : t));
    };
  
    return (
      <div>
            <h1>Expense Tracker</h1>
        <form onSubmit={addExpense}>
          <input type="text" placeholder="Enter an expense" id="expense" />
          <input type="number" placeholder="Enter an amount" id="amount" min="0" />
          <input type="text" placeholder="Enter a category" id="category" />
          <button type="submit">Add</button>
        </form>
        <ul>
            <h3>Expense | Amount | Category</h3>
          {expenses.map((expense) => (
            <li key={expense.id} style={{fontSize: '1.2em'}}>
             <b> {expense.expense}
              <span> | </span>
              <span>${expense.amount}</span>
              <span> | </span>
              {expense.category}
              <span> </span></b>
              <button onClick={() => {
                if (window.confirm("Are you sure you want to delete this record?")) {
                  const index = expenses.indexOf(expense);
                  removeExpense(index);
                }
              }}>
                Delete
              </button>
              <span> </span>
              <button onClick={() => editExpense(expense.id)}>
                Edit
              </button>
            </li>
          ))}
        </ul>
        <div>
          <ul>
          <h4>Here is a summary of your expenses:</h4>
            <li>
            Total Expenses: <b>$</b><span id="total-expenses"><b>{totalExpenses}</b></span>
            </li>
            <li>
              Amount of categories: <b>{categories.length}</b>
            </li>
            {categories.map((category) => (
              <li key={category}>
                Total items for <b>{category}</b> is: <b>{expenses.filter((expense) => expense.category === category).length}</b>
                <span> | </span>
                Total expenses for <b>{category}</b> is: <b>$</b><span><b>{expenses.filter((expense) => expense.category === category).reduce((a, b) => a + b.amount, 0)}</b></span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  export default ExpenseTrackerApp;