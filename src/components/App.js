import React, { Component } from "react";
import Nav from "./Nav";
import "../input.css";
import { connect } from "react-redux";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return <Nav />;
  }
}
const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(App);
