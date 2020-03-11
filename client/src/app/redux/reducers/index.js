import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer'
import MemberReducer from './MemberReducer';
import PostReducer from './PostReducer';
import GroupReducer from './GroupReducer';

const rootReducer = combineReducers({
    user:AuthReducer,
    member:MemberReducer,
    post:PostReducer,
    groups:GroupReducer
})

export default rootReducer;