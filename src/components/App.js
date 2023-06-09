import React from 'react';
import ExpenseTrackerApp from './ExpenseApp';
import PrimarySearchAppBar from './AppHeader';

const App = () => {
  return (
    <div className='container'>
      <PrimarySearchAppBar/>
      <ExpenseTrackerApp />
      
    </div>
  )
} 

export default App;