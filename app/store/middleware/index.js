import { takeEvery, all } from 'redux-saga/effects';
import * as types from '../actions/types'
import authenticationSaga from './authenticationSaga';

export default function* watch() {
  yield all([takeEvery(types.OTP_REQ, authenticationSaga)]);
  yield all([takeEvery(types.REQ_USR_UPDATE, authenticationSaga)]);
  yield all([takeEvery(types.AUTH_REQ, authenticationSaga)]);
}
