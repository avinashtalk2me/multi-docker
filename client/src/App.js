import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Fib from "./Fib";
import OtherPage from "./OtherPage";

function App() {
  return (
    <Router>
      <div>
        <header>
          <h1> Fib Caluculator </h1>
          <Link to="/">Home</Link>
          <Link to="/otherpage">Other Page</Link>
        </header>
      </div>
      <Switch>
        <Route exact path="/" component={Fib} />
        <Route path="/otherpage" component={OtherPage} />
      </Switch>
    </Router>
  );
}

export default App;
