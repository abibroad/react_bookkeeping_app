import React from 'react';
import ExpenseTrackerApp from './ExpenseApp';
import PrimarySearchAppBar from './AppHeader';
import Search from './Search';

const App = () => {
  return (
    <div className='container'>
      <PrimarySearchAppBar />
      <Search />
      <ExpenseTrackerApp />
      
    </div>
  )
} 

export default App;