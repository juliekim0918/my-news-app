import { createStore, applyMiddleware, combineReducers } from "redux";
import loggingMiddleware from "redux-logger";
import thunk from "redux-thunk";
import sections from "./sections";
import currentSection from "./currentSection";
import articles from "./articles";

const reducer = combineReducers({
  sections,
  currentSection,
  articles,
});

const store = createStore(reducer, applyMiddleware(thunk, loggingMiddleware));

export default store;
