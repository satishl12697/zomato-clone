import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Homepage from './Homepage';
import Form from './Form';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <h1> checkout</h1>
          </Route>
          <Route path="/login">
            <h1> login</h1>
          </Route>


          {/* this is the default route */}
          <Route path="/">
              <Homepage />
            {/* <h1> Home page</h1> */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// we need react router for linking to pages
// that is from http://localhost:3000/ to http://localhost:3000/checkout and so on

export default App;
