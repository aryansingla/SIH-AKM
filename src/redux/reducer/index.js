import { combineReducers } from "redux";
import auth from "./auth";
import scheme from "./scheme";
import filter from "./filter";

export default combineReducers({
  auth,
  scheme,
  filter,
});
