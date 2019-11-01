import React from "react";
import { HashRouter as Router, Route, Redirect } from "react-router-dom";
import Article from "./Article";
import List from "./List";
import "./App.css";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Redirect to="list" />
      </Route>
      <Route path="/list">
        <List />
      </Route>
      <Route path="/article/:index">
        <Article />
      </Route>
    </Router>
  );
}

export default App;
