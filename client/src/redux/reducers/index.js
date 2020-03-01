import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer'
import MemberReducer from './MemberReducer';
import PostReducer from './PostReducer';

const rootReducer = combineReducers({
    user:AuthReducer,
    member:MemberReducer,
    post:PostReducer
})

export default rootReducer;