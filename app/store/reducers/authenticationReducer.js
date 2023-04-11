/**
 * Authentication Reducer 
 * manages auth states in app 
 * returns an Object like
 *  {
 *  "AUTH_REQ": AUTH_REQ(state,action){}, 
 *  "AUTH_RESP": AUTH_RESP(state,action){}, 
 *  "LOG_OUT":   LOG_OUT(state,action){}
 * }
 * contains anonymus functions
 * for reference made AUTH_REQ as normal
 * check ReducerGenerator
 * 
 * addr ^ as delimiter, keep that in initial for verification
 */

import * as types from '../actions/types'

const initialState = {
  user: {},
  module: {},
  platform: {},
  acl:{},
  character:{},
  isLoggedIn : false
}

const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
      case types.OTP_REQ:
        return {...state}
        case types.AUTH_RESP:
          console.log('###########################')
        return{...state,isLoggedIn:true,character:action.response}
        default:
          return state
  }
};
export default authenticationReducer
