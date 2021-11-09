
import React from 'react';
import './ExpenseFilter.css';
const ExpenseFilterByYear = (props) => {

  return (<div className="expenses-filter">
    <div>
      <label className="expenses-filter__control">Filter By Year</label>
      <select onChange={(event) => { props.onSelectYear(event.target.value) }} value={props.selectedYear}>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
      </select>
    </div>

  </div>)

  
};

export default ExpenseFilterByYear;
