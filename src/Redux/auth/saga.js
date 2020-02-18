import { LOGIN_REQUEST, LOGOUT_REQUEST, SIGNUP_REQUEST } from '../constants'
import { loginError, loginSuccess, loaderError, signupSuccess, signupError } from '../action'
import { put, call, all, takeLatest } from 'redux-saga/effects'
// import * as NavigationService from '../../routes/NavigationService'
import { loginApi, logoutApi, SignupApi } from './api';

export function* loginRequest(action) {
    const { email, password } = action
    try {
        const payload = {
            email, password
        }
        const response = yield call(loginApi, payload);
        if (response && response.user) {
            yield put(loginSuccess(response));
            yield put(loaderError(response))
        } else {
            yield put(loaderError(response))
            yield put(loginError(response.message))
        }
    } catch (err) {
        yield put(loginError(err));
        yield put(loaderError(err))
    }
}


export function* signUpRequest(action) {
    try {
        const response = yield call(SignupApi, action.payload)
        if (response && response.id) {
            yield put(signupSuccess(response));
            yield put(loaderError(response))

        } else {
            yield put(loaderError(response))
            yield put(signupError(response))

        }
    } catch (err) {
        yield put(signupError(err));
        yield put(loaderError(err))
    }
}

export function* loginWatcher() {
    yield all([
        takeLatest(LOGIN_REQUEST, loginRequest),
        takeLatest(SIGNUP_REQUEST, signUpRequest)

    ])
}
export default loginWatcher
