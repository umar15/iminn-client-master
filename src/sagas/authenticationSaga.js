import { put, call } from "redux-saga/effects";

import * as types from "../actions";
import userService from "../services/user.service";

export function* registerSaga(payload) {
  try {
    const response = yield call(userService.create, payload);
    yield [put({ type: types.REGISTER_USER_SUCCESS, response })];
  } catch (error) {
    yield put({ type: types.REGISTER_USER_ERROR, error });
  }
}

export function* loginSaga(payload) {
  yield put({ type: types.LOGIN_USER_SUCCESS, payload: payload });
}

export function* loginSagaFailure(error) {
  yield put({ type: types.LOGIN_USER_ERROR, error });
}
