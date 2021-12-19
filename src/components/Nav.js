import React, { Component } from "react";
import { connect } from "react-redux";
import "../input.css";
import { getSections } from "../store/sections";
import { Routes, HashRouter as Router, Route, Link } from "react-router-dom";
import Articles from "./Articles";

class Nav extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.getSections();
  }

  render() {
    let { sections } = this.props;
    sections = sections.slice(1, 6);
    return (
      <div className="md:container mx-auto p-4 z-10 bg-white rounded-md drop-shadow-sm shadow-slate-500">
        <div className="flex justify-between">
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </Link>
          <div className="flex flex-col md:flex-row space-x-4">
            <Link to="/most-viewed">
              <div className="font-sans text-xl text-right">Most Viewed</div>
            </Link>
            <Link to="/">
              <div className="font-sans text-xl text-right">Current</div>
            </Link>
          </div>
        </div>
        <div className="mt-2 border-neutral-300 border-t py-1"></div>
        <div className="flex flex-col md:flex-row justify-end space-x-4 group">
          <div className="font-sans text-md px-3 py-1 text-right">
            Sections:
          </div>
          {sections.map((section) => {
            return (
              <Link to={`/${section.section}`} key={section.section}>
                <div className="font-sans text-l text-right hover:bg-beige/50 hover:cursor-pointer px-3 py-1 rounded-md transition  ">
                  {section.display_name}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ sections }) => {
  return { sections };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSections: () => {
      dispatch(getSections());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
