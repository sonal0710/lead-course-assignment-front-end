import axios from 'axios';

export enum actionTypes {
    GET_ALL_COURSES = "GET_ALL_COURSES",
}

/**
 * Action to sort items as we drag and drop estimations.
 */
export const getAllCourses = () => (dispatch: any) => {
    axios.get(process.env.REACT_APP_API_URL + '/courses')
        .then(res => {
            console.log(res);
            dispatch({
                type: actionTypes.GET_ALL_COURSES,
                payload: res.data
            });
        })
        .catch(err => {
            // dispatch({
            //     type: actionTypes.GET_ESTIMATION_FAILURE,
            //     error: err
            // })
        })
};