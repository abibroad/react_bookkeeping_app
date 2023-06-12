import { useState } from "react";
import ExpenseTrackerApp from "./ExpenseApp";

function SearchBar() {
    const expense = [ExpenseTrackerApp.expenses]
    const [searchString, setSearchString] = useState()
    const startsWith = str => word => str ? word.slice(0,str.length).toLowerCase() === str.toLowerCase() : true
  
    return <div>
             <input onChange={e => setSearchString(e.target.value)} />
             <ul>
              {expense.filter(startsWith(searchString)).map(expense => <li>{expense}</li>)}
             </ul>
           </div>
}
  
export default SearchBar;