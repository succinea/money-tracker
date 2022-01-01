import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateExpense from "./CreateExpense";
import ExpenseDetails from "./ExpenseDetails";
import NotFound from "./NotFound";
import Profile from "./Profile";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";

function App() {
  const { user, isAuthenticated, loginWithRedirect, logout, error, isLoading } =
    useAuth0();

  const loginNow = () => {
    loginWithRedirect();
  };

  const logoutNow = () => {
    logout({ returnTo: window.location.origin });
  };

  return (
    <div className="App">
      {isLoading && <div> Loading.... </div>}
      {error && <div> {error.message}</div>}
      <Router>
        {!isLoading && (
          <Navbar
            isAuthenticated={isAuthenticated}
            callback={isAuthenticated ? logoutNow : loginNow}
          />
        )}
        <div className="content">
          {isAuthenticated ? (
            <Switch>
              <Route exact path="/">
                <Dashboard />
              </Route>
              <Route exact path="/create">
                <CreateExpense />
              </Route>
              <Route exact path="/profile">
                <Profile user={user} />
              </Route>
              <Route exact path="/expenses/:id">
                <ExpenseDetails />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          ) : ( !isLoading && <Home />)
          }
        </div>
      </Router>
    </div>
  );
}

export default App;
