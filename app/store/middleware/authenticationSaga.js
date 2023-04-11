import { put, call, select } from 'redux-saga/effects';
import * as authenticationAction from '../actions/authenticationAction'
import * as types from '../actions/types'
import authenticationService from '../services/authenticationService';

const delay = (ms) => new Promise(res => setTimeout(res, ms))

export default function* authenticationAsync(action)  {
    yield put(authenticationAction.showLoader())   
   
    switch(action.type) {
        case types.OTP_REQ :
           
            const apiAuth = yield call(authenticationService, action.phone);
            yield put(authenticationAction.authResponseHandler(apiAuth))
             
        break;

        case types.REQ_USR_UPDATE :
            const updteRes = yield call(updateUserService, action.userObj);
        break;
    }


}