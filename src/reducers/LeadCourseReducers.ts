import { actionTypes } from "../actions";
import { LeadCourseInitialState } from '../interfaces'

export const initialState: LeadCourseInitialState = {
  courseDetails: []
};

export const LeadCourseReducer = (state: LeadCourseInitialState = initialState, action: any) => {

  switch (action.type) {

    case actionTypes.GET_ALL_COURSES: {
      return {
        ...state,
        courseDetails: action.payload
      }
    }

      default:
        return state;
    }
  };
