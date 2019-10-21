import { all } from 'redux-saga/effects';
import { appSaga } from './App/saga';
import { loginSaga } from './App/containers/Login/saga';

export default function* rootSaga() {
  yield all([appSaga(), loginSaga()]);
}
