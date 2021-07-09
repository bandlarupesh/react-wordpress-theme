import React from "react";
import Pages from "./Pages";
import ViewPost from "./ViewPost";
import "./index.scss";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <nav className="navbar sticky-top navbar-light bg-white header">
        <div className="container-fluid">
          <a href="#" className="search">
            <span>Search</span>
            <span className="underline"></span>
          </a>
          <h1 className="navbar-brand">Norge</h1>
          <a href="#" className="menu">
            <span>Menu</span>
            <span className="underline"></span>
          </a>
        </div>
      </nav>
      <Switch>
        <Route exact path="/:id" component={ViewPost} />
        <Route path="/" component={Pages} />
      </Switch>
      <footer className="footer text-center p-4">
        <h1 className="navbar-brand">Norge</h1>
        <div>
          <a href="#" className="footer-link">
            Norge Theme
          </a>
          <small className="text-muted">Powered by wordpress</small>
        </div>
        <div>
          <small className="text-muted">@ Copyright 2021 by</small>
          <a href="#" className="footer-link">
            HestaBit
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
