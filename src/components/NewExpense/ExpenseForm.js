import { useState } from "react";
import './ExpenseForm.css';
const ExpenseForm = (props) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [edate, setEdate] = useState('');

  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.onSaveExpenseForm({
      title,
      amount,
      date: edate,
      id: Math.random()
    });

  }
  const titleHandler = (event) => {
    setTitle(event.target.value);
  }
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="txtTitle" >Title:</label>
          <input type="text" id="txtTitle" onChange={titleHandler} />
        </div>


        <div className="new-expense__control">
          <label htmlFor="txtTitle">Amount:</label>
          <input type="number" id="txtAmount" min="0.01"
            onChange={(event) => { setAmount(event.target.value); }}
          /></div>


        <div className="new-expense__control">
          <label htmlFor="txtDate">Date:</label>
          <input type="date" id="txtDate" onChange={(event) => { setEdate(new Date(event.target.value)); }} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button type="cancel" onClick={() => { props.isEditingForm(false) }}>Cancel</button>
      </div>

    </form>
  )
}
export default ExpenseForm;