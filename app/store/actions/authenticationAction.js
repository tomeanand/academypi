/**
 * Reducers related with authentications
 */
import * as types from './types'

export const otpRequest = (phone)=>    {
    return {
        type: types.OTP_REQ, phone
    }
}
 export function requestAuth(username, password)  {
    return  {
        type: types.OTP_REQ,
        username, password
    }
 }
 export function authResponseHandler(response)  {
     return {
        type: types.AUTH_RESP, response
     }
 }
 export function requestUserUpdate(userObj)  {
    return {
       type: types.REQ_USR_UPDATE, userObj
    }
}
 export function logout()   {
     return{ type: types.LOG_OUT}
 }

 export function showLoader()   {
     return{ type: types.SHOW_LOADER}
 }
 export function hideLoader()   {
     return{ type: types.HIDE_LOADER}
 }

 