import React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Paiement from "./components/Paiement";

import { Offres, Offer, Signup, Login } from "./routes";
import Publish from "./routes/Publish";
function App() {
  return (
    <div className="">
      <Router>
        <nav>
          <Header />
        </nav>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/publish">
            <Publish />
          </Route>
          <Route path="/offres">
            <Offres />
          </Route>
          <Route path="/offer/:id">
            <Offer />
          </Route>
          <Route exact path="/">
            home
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
