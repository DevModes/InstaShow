import { LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_REQUEST, SIGNUP_ERROR, SIGNUP_REQUEST, SIGNUP_SUCCESS } from '../constants'
const initialState = {
    loading: false,
    user: [],
    error: '',
    signupError : ''
}
export function loginReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                loading: true,
                ...state
            }
        case LOGIN_SUCCESS:
            return {
                loading: false,
                ...initialState,
                user: action.user ? action.user : action
            }
        case LOGIN_ERROR:
            return {
                loading: false,
                state,
                error: action
            }

        case SIGNUP_REQUEST:
            return {
                loading: true,
                ...state
            }
        case SIGNUP_SUCCESS:
            return {
                loading: false,
                ...initialState,
                user: action.user
            }
        case SIGNUP_ERROR:
            return {
                loading: false,
                state,
                signupError: action.message.errors[0].message
            }

        case LOGOUT_REQUEST:
            return {
                loading: false,
                ...state
            }
        default:
            return state
    }
}
export default loginReducer