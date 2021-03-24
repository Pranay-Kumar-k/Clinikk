import { GET_ALL_COURSES_FAILURE, GET_ALL_COURSES_REQUEST, GET_ALL_COURSES_SUCCESS } from "./actionType"


const initState = {
    courses:[]
}

export const coursesReducer = (state = initState,{type, payload}) => {
    switch(type) {
        case GET_ALL_COURSES_REQUEST:
            return {
                ...state
            }
        case GET_ALL_COURSES_SUCCESS:
            return {
                ...state,
                courses:payload
            }
        case GET_ALL_COURSES_FAILURE:
            return {
                ...state
            }
        default:
            return state
    }
}