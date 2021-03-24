import { GET_ALL_COURSES_FAILURE, GET_ALL_COURSES_REQUEST, GET_ALL_COURSES_SUCCESS, GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS } from "./actionType"


const initState = {
    // user:[],
    courses:[]
}

export const reducer = (state = initState,{type, payload}) => {
    switch(type) {
        case GET_USER_REQUEST:
            return {
                ...state
            }
        case GET_USER_SUCCESS:
            return {
                ...state,
                user:payload
            }
        case GET_USER_FAILURE:
            return {
                ...state
            }
        case GET_ALL_COURSES_REQUEST:
            return {
                ...state
            }
        case GET_ALL_COURSES_SUCCESS:
            return {
                ...state,
            }
        case GET_ALL_COURSES_FAILURE:
            return {
                ...state
            }
        default:
            return state
    }
}