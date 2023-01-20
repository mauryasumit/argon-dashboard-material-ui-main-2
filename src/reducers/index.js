import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import mis from "./mis";

export default combineReducers({
  auth,
  message,
  mis,
});
