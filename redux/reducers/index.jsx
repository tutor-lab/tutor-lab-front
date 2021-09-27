import { combineReducers } from "redux";
import update from "./update";
import SignUpR from "./signup";

const rootReducer = combineReducers({
  update,
  SignUpR,
});

export default rootReducer;
