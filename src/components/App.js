import React, { Component } from "react";
import Nav from "./Nav";
import Articles from "./Articles";
import "../input.css";
import { connect } from "react-redux";
import {
  HashRouter as Router,
  Route,
  Switch,
  Routes,
  Link,
} from "react-router-dom";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="bg-beige p-4 h-screen space-y-2">
        <Nav />
        <Switch>
          <Route path="/" render={(props) => <Articles {...props} />} exact />
          <Route
            path="/most-viewed"
            render={(props) => <Articles {...props} />}
            exact
          />
          <Route path="/:section" render={(props) => <Articles {...props} />} />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(App);
