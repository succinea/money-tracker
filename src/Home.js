import { useEffect, useState } from "react";
import ExpensesList from "./ExpensesList";
import useFetch from "./useFetch";

const Home = () => {
  const { data, isLoading, error } = useFetch("http://localhost:8000/expenses");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div> Loading... </div>}
      {data && <ExpensesList expenses={data} />}
    </div>
  );
};

export default Home;
