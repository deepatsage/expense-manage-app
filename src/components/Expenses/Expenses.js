import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilterByYear from '../ExpenseFilter/ExpenseFilter';

const Expenses = (props) => {

  const [year, setYear] = useState("2021");
  const onSelectYear = (y) => {
    setYear(y);
  }

  let expenses = props.items.filter(e => e.date.getFullYear().toString() === year.toString());

  return (
    <Card className="expenses">
      <ExpenseFilterByYear selectedYear={year} onSelectYear={onSelectYear} />
      {expenses.length > 0 && expenses.map((item, index) =>
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
          onDelete={props.deleteExpenseItem}
          id={item.id}
        />
      )};
      {expenses.length === 0 && <div className="norecord">No Records found!!</div>}
    </Card>
  );
}

export default Expenses;
