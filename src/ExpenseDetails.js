import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const ExpenseDetails = () => {
  const { id } = useParams();
  const { data: expense, error, isLoading } = useFetch(
    "http://localhost:8000/expenses/" + id
  );

  return (
    <div className="expense-details">
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {expense && (
        <article>
          <h2>{expense.summary}</h2>
          <p>{expense.type === 'Credit' ? 'Received': 'Spent'} ${expense.amount}
           {expense.type === 'Credit' ? ' to': ' from'}&nbsp;{expense.source}</p>
          <div>
              {expense.comments}
              <span>{expense.category}</span>
              <span>{expense.timestamp}</span>
          </div>
        </article>
      )}
    </div>
  );
};

export default ExpenseDetails;
