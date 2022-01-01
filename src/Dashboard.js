import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AccountSummary from "./AccountSummary";
import ExpensesList from "./ExpensesList";
import useFetch from "./useFetch";

const Dashboard = () => {
  const { data, isLoading, error } = useFetch("http://localhost:8000/expenses");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div> Loading... </div>}
      {data && <AccountSummary expenses={data} title="Accounts Summary" />}
      {data && <ExpensesList expenses={data} title="Expenses Details" />}
    </div>
  );
};

export default Dashboard;
