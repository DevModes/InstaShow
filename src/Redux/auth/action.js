import { LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_REQUEST, SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_ERROR } from '../constants'

const loginRequest = (data) => {
    const { email, password } = data
    return {
        type: LOGIN_REQUEST,
        email,
        password,
    }
}
const loginSuccess = (action) => {
    return {
        type: LOGIN_SUCCESS,
        user: action.user ? action.user : action
    }
}
const loginError = (message) => {
    return {
        type: LOGIN_ERROR,
        message
    }
}

const signupRequest = (data) => {
    return {
        type: SIGNUP_REQUEST,
        payload : data
    }
}
const signupSuccess = (action) => {
    return {
        type: SIGNUP_SUCCESS,
        user: action
    }
}
const signupError = (message) => {
    return {
        type: SIGNUP_ERROR,
        message
    }
}

const logoutRequest = () => {
    return {
        type: LOGOUT_REQUEST,
    }
}
export {
    loginRequest,
    loginError,
    loginSuccess,
    logoutRequest,
    signupRequest,
    signupError,
    signupSuccess
}