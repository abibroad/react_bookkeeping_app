import React from 'react';
import './App.css';


function ExpenseTrackerApp() {
  const [expenses, setExpenses] = React.useState([])
  const [expense, setExpense] = React.useState("")
  const [cost, setCost] = React.useState("")
  const [category, setCategory] = React.useState("")
  const [expenseEditing, setExpenseEditing] = React.useState(null)
  const [editingText, setEditingText] = React.useState("")
  const [costEditing, setCostEditing] = React.useState(null)
  const [editingCost, setEditingCost] = React.useState("")

  
  

function addExpense(e) {
  // a common practice in React - page won't regresh when we are pressing our "Add an Expense" button because by default forms refresh the page when submitted
  e.preventDefault()
 

  const newExpense = {
    id: new Date().getTime(),
    expense: expense,
    cost: parseFloat(cost),
    category: category,
  }
    // Check if the expense name is empty
    if (!newExpense.expense || !newExpense.category) {
     alert("Please enter all the fields.");
     return false;
   }
   // Check if the cost is empty
    if (!newExpense.cost) {
     alert("Please enter the cost.");
     return false;
   }
  
   // Check if the cost is negative
   if (newExpense.cost <= 0) {
     alert("Please enter a positive value for the cost.");
     return false;
   }
  

// I have used a spread operator, because if we keep adding our expenses, they need to be stored in an array, and avoid data mutations
  setExpenses([...expenses].concat(newExpense))
// we use this function to restore the second hook to its default value to an empty string so everytime it gets reset after submitting
  setExpense("")
  setCost("")
  setCategory("")
} 
// this functions filters out the expense that we are trying to delete with the id
function deleteExpense(id) {

  // we set up a variable -> if we return a truthy value, it will be included in the array, otherwise it will not include it
  //so we are only filtering the ones where expense.id is not equal to id and it will be true for every expense except the one that we are deleting
  const updatedExpenses = [...expenses].filter((expense) => expense.id !== id)

  // here we have set up an aditional confirmation to make sure we want to delete certain expense
  if (window.confirm("Are you sure you want to delete this expense?")) {
    setExpenses(updatedExpenses)
  }
}

function editExpense(id) {
  const updatedExpenses = [...expenses].map((expense) => {
    if (expense.id === id) {
      expense.expense = editingText;
    }
    return expense;
  });
  setExpenses(updatedExpenses);
  setExpenseEditing(null);
  setEditingText("");
}

function editCost(id) {
  const updatedCost = [...expenses].map((expense) => {
    if (expense.id === id) {
      expense.cost = editingCost;
    }
    return expense;
  });
  setCost(updatedCost);
  setCostEditing(null);
  setEditingCost("");
}




// we added a value={expense} that is to make sure that there is a >two way binding< in our code to avoid bugs 
  return (
    <div className="App">
      <h1> Expense Tracker App </h1>
      <form onSubmit={addExpense}>
        <input type="text" placeholder="Enter an expense" onChange={(e) => setExpense(e.target.value)} value={expense}/>
        <input type="number" placeholder="Enter an cost" onChange={(e) => setCost(e.target.value)} value={cost}/>
        <input type="text" placeholder="Enter a category" onChange={(e) => setCategory(e.target.value)} value={category}/>
        <button type="submit">Add an Expense</button>
      </form>

      <ul>
        <h3>Expense | Amount | Category</h3>
      {expenses.map((expense) => (
        <li key={expense.id} style={{fontSize: '1.2em'}}>

        {expenseEditing === expense.id ? (
              <input
                type="text"
                onChange={(e) => setEditingText(e.target.value)}
                value = {editingText}
              />
            ) : (
              <div>{expense.expense} <span> | </span> </div>
            )}

        {costEditing === expense.id ? (
              <input
                type="number"
                onChange={(e) => setEditingCost(e.target.value)}
                value = {editingCost}
              />
            ) : (
              <div>£{expense.cost} <span> | </span> </div>
            )}

          {expense.category} <span> </span>
          <button onClick={() => deleteExpense(expense.id)}>Delete Expense</button> <span> </span> <br></br>
          <button onClick={() => setExpenseEditing(expense.id)}>Edit Expense</button>
          <button onClick={() => editExpense(expense.id)}>Submit Expense Edits</button>
          <button onClick={() => setCostEditing(expense.id)}>Edit Cost</button>
          <button onClick={() => editCost(expense.id)}>Submit Edit Costs</button>
        </li>
      ))}
      </ul>
    </div>
  );
}


export default ExpenseTrackerApp;