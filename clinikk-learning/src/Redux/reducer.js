import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, TOGGLE_CLICK } from "./actionType"


const initState = {
    user:[],
    click:false
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
                user:payload,
            }
        case GET_USER_FAILURE:
            return {
                ...state
            }
        case TOGGLE_CLICK:
            return {
                ...state,
                click:payload
            }
        default:
            return state
    }
}