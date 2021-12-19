import React, { Component } from "react";
import { render } from "react-dom";
// import { HomeIcon } from "@heroicons/react/outline";
import { Provider } from "react-redux";
import "./input.css";
import App from "./components/App";
import store from "./store/index";

const app = document.querySelector("#app");

render(
  <Provider store={store}>
    <App />
  </Provider>,
  app
);
