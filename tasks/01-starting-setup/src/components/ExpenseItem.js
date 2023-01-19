import './ExpenseItem.css'

// export default function ExpenseItem() {
function ExpenseItem() {
  return (
    <div className='expense-item'>
      <div>March 28 2018</div>
      <div className='expense-item__description'>
        <h2>Car insurance</h2>
        <div className='expense-item__price'>$777.33</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
