import { combineReducers } from "redux";
import { loginReducer } from './auth/reducer'
const rootreducer = combineReducers({
    loginReducer
})
export default rootreducer