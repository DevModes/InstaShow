import { put, takeEvery, all } from 'redux-saga/effects'
import { loginWatcher } from './auth/saga'
export default function* rootSaga() {
  yield all([
    loginWatcher(),
  ])
}