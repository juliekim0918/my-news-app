import React, { Component } from "react";
import { render } from "react-dom";
import "./input.css";

const app = document.querySelector("#app");

class Main extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="md:container mx-auto bg-green-50 my-10 p-10 rounded-md">
        <div className="">hello</div>
      </div>
    );
  }
}

render(<Main />, app);
