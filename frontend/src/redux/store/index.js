import { combineReducers } from "redux"
import authReducer from "../reducer/authReducer"
import utilityReducer from "../reducer/utilityReducer"
import searchReducer from "../reducer/searchReducer"

export const reducers = combineReducers({ authReducer, utilityReducer, searchReducer })
