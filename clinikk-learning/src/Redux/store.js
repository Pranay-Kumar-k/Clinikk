import { applyMiddleware, createStore,compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import {reducer} from "./reducer";
import {coursesReducer} from "./CoursesReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers(
    {user:reducer,
        courses:coursesReducer
       })

export const store = createStore( rootReducer, composeEnhancers( applyMiddleware(thunk) ) )