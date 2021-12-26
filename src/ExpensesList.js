import { Link } from "react-router-dom";
const ExpensesList = ({ expenses }) => {
  return (
    <div className="expenses-list">
      {expenses.map((expense) => (
        <div className="expense-preview" key={expense.id}>
          <Link to={`/expenses/${expense.id}`}>
            <h2>{expense.summary}</h2>
            <div className={expense.type === 'Credit' ? 'plus': 'minus'}>
              {expense.type === 'Credit' ? '': '- '}${expense.amount}
              </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ExpensesList;
