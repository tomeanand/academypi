/**
 * merging all reducers
 * refer in storeConfig, rootReducer
 */
import {     combineReducers } from "redux"; 
import * as authenticationReducer from './authenticationReducer'

const rootReducer = combineReducers(Object.assign(authenticationReducer))

export default rootReducer;