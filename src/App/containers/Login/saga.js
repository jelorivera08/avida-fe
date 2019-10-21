import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';

import { API } from '../../constants';
import {
  LOGIN_REQUEST,
  LOGIN_REQUEST_FAILED,
  LOGIN_REQUEST_SUCCESS
} from './constants';
import { API_ERROR } from '../../constants';

function* login(action) {
  try {
    const { username, password } = action.payload;

    const res = yield axios.post(`${API}users/login`, {
      username,
      password
    });

    if (res.data.status === 200) {
      yield put({ type: LOGIN_REQUEST_SUCCESS, payload: res.data.payload });
    } else {
      yield put({ type: LOGIN_REQUEST_FAILED, payload: res.data.payload });
    }
  } catch (e) {
    yield put({ type: API_ERROR, message: e.message });
  }
}

export function* loginSaga() {
  yield takeLatest(LOGIN_REQUEST, login);
}
