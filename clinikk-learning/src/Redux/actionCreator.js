import { GET_ALL_COURSES_FAILURE, GET_ALL_COURSES_REQUEST, GET_ALL_COURSES_SUCCESS, GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS } from "./actionType";
import axios from "axios";

export const getUserRequest = () => ({
    type:GET_USER_REQUEST
})

export const getUserSuccess = (payload) => ({
    type:GET_USER_SUCCESS,
    payload
})

export const getUserFailure = () => ({
    type:GET_USER_FAILURE
})

export const getUserData = () => (dispatch) => {
    dispatch(getUserRequest());
    return axios({
        method:'GET',
        url:"https://aqueous-badlands-15880.herokuapp.com/users/pranay123"
    })
    .then((res) => {
        console.log(res.data.pranay)
        dispatch(getUserSuccess(res.data.pranay))
    })
    .catch((err) => {
        console.log(err)
        dispatch(getUserFailure())
    })
}

export const getAllCoursesRequest = () => ({
    type:GET_ALL_COURSES_REQUEST
})

export const getAllCoursesSuccess = (payload) => ({
    type:GET_ALL_COURSES_SUCCESS,
    payload
})

export const getAllCoursesFailure = () => ({
    type:GET_ALL_COURSES_FAILURE
})

export const getAllCoursesData = () => (dispatch) => {
    dispatch(getAllCoursesRequest())
    return axios({
        method:'GET',
        url:"https://aqueous-badlands-15880.herokuapp.com/all_courses"
    })
    .then((res) => {
        console.log(res.data)
        dispatch(getAllCoursesSuccess(res.data))
    })
    .catch((err) => console.log(err))
}