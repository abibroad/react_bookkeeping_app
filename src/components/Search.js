import React, { useState } from 'react';
//import Scroll from './Scroll';
//import SearchList from './SearchList';
import ExpenseTrackerApp from './ExpenseApp';

function SearchList({ filteredExpenses }) {
    const filtered = filteredExpenses.map(expenses =>  <ExpenseTrackerApp key={expenses.id} expenses={expenses} />); 
    return (
      <div>
        {filtered}
      </div>
    );
  }
  
//  export default SearchList;

function Search({ expenses }) {

  const [searchField, setSearchField] = useState("");

  const filteredExpenses = expenses.filter(
    expenses => {
      return (
        expenses
        .expenseName
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        expenses
        .category
        .toLowerCase()
        .includes(searchField.toLowerCase())
      );
    }
  );

  const handleChange = e => {
    setSearchField(e.target.value);
  };

  function searchList() {
    return (
      
        <SearchList filteredExpenses={filteredExpenses} />
      
    );
  }

  return (
    <section className="garamond">
      <div className="navy georgia ma0 grow">
        <h2 className="f2">Search your expenses</h2>
      </div>
      <div className="pa2">
        <input 
          className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
          type = "search" 
          placeholder = "Search expenses" 
          onChange = {handleChange}
        />
      </div>
      {searchList()}
    </section>
  );
}

export default Search;