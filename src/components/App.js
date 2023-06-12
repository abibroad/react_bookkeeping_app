import React from 'react';
import ExpenseTrackerApp from './ExpenseApp';
import PrimarySearchAppBar from './AppHeader';
//import SearchBar from './searchBar';

const App = () => {
  return (
    <div className='container'>
      <PrimarySearchAppBar />
      
      <ExpenseTrackerApp />
      
    </div>
  )
} 

export default App;