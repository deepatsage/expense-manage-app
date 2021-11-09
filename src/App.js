import React, { useState } from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const expenseTestData = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]
  const [expenses, setExpenses] = useState(expenseTestData);

  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => {
      return [expense, ...prevState];
    });
  }
  const deleteExpenseItem = (id) => {
    // const updatedExpenses = [...expenses];
    // const index = updatedExpenses.findIndex(e => e.id === id);
    // updatedExpenses.splice(index, 1);
    setExpenses((prevExpenses) => {
      const updatedExpenses = [...prevExpenses];
      const index = updatedExpenses.findIndex(e => e.id === id);
      updatedExpenses.splice(index, 1);
      return updatedExpenses;
    });
  }
  return (
    <div>
      <NewExpense addExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses} deleteExpenseItem={deleteExpenseItem} />
    </div>
  );
}

export default App;
