import { Link } from "react-router-dom";
const ExpensesList = ({ expenses, title }) => {
  return (
    <div className="expenses-list">
      <div className="expenses-list-header">
        <h2>{title}</h2>
        <div>
        <Link to="/create">
          New Expense
        </Link>
        </div>
      </div>
      {expenses.map((expense) => (
        <div className="expense-preview" key={expense.id}>
          <Link to={`/expenses/${expense.id}`}>
            <h3>{expense.summary}</h3>
            <div className={expense.type === "Credit" ? "plus" : "minus"}>
              {expense.type === "Credit" ? "" : "- "}${expense.amount}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ExpensesList;
