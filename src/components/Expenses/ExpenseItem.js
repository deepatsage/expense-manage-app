
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

  console.log('ExpenseItem evaluated by React');

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
        <div><button type="button" onClick={() => { props.onDelete(props.id) }}>Delete</button></div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
