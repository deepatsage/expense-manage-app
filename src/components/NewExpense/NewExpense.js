import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';
const NewExpense = (props) => {

  const [toggleForm, setToggleForm] = useState(false);
  const onSaveExpenseForm = (data) => {
    props.addExpense(data);
  }
  const isEditingForm = (val) => {
    setToggleForm((val) => !val);
  }
  return (
    <div className="new-expense">
      {toggleForm && <ExpenseForm onSaveExpenseForm={onSaveExpenseForm} isEditingForm={isEditingForm}></ExpenseForm>}
      {!toggleForm && <button onClick={() => { isEditingForm(true) }}>Add New Button</button>}

    </div>
  );
}
export default NewExpense;