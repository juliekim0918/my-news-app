import React, { Component } from "react";
import { connect } from "react-redux";
import "../input.css";
import { getSections } from "../store/sections";

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
      <div className="bg-beige p-4 h-screen">
        <div className="md:container mx-auto p-4 z-10 bg-white rounded-md drop-shadow-sm shadow-slate-500">
          <div className="flex justify-between">
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
            <div className="flex flex-row space-x-4">
              <div className="font-sans text-xl">Most Popular</div>
              <div className="font-sans text-xl">Most Viewed</div>
              <div className="font-sans text-xl">Current</div>
            </div>
          </div>
          <div className="mt-2 border-neutral-300 border-t py-1"></div>
          <div className="flex justify-end space-x-4 group">
            <div className="font-sans text-md px-3 py-1">Sections:</div>
            {sections.map((section) => {
              return (
                <div
                  key={section.section}
                  className="font-sans text-l hover:bg-beige/50 hover:cursor-pointer px-3 py-1 rounded-md transition  "
                >
                  {section.display_name}
                </div>
              );
            })}
          </div>
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
