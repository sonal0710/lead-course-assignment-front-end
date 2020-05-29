import { combineReducers } from "redux";
import { LeadCourseReducer } from "./LeadCourseReducers";

const rootReducer = combineReducers({
  courses: LeadCourseReducer
});

export default rootReducer;
