import React, { Component } from "react";
import { render } from "react-dom";
// import { HomeIcon } from "@heroicons/react/outline";
import { Provider } from "react-redux";
import "./input.css";
import App from "./components/App";
import Articles from "./components/Articles";
import store from "./store/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const app = document.querySelector("#app");

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  app
);
