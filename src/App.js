import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CreateExpense from './CreateExpense';
import ExpenseDetails from './ExpenseDetails';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route exact path="/create">
            <CreateExpense />
          </Route>
          <Route exact path="/expenses/:id">
            <ExpenseDetails />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;