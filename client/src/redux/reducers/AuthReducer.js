import * as Types from '../constants/AuthConstant';
import decode from 'jwt-decode';
const auth = JSON.parse(localStorage.getItem('state'))? JSON.parse(localStorage.getItem('state')).auth : {}
const initialState = { 
    token:{},
    data:{},
    error:{},
    success:{},
    ...auth
}

function AuthReducer(state=initialState,actions) {
    const { type,payload }= actions;
    switch(type){
        case Types.LOGIN:
            sessionStorage.setItem('token',JSON.stringify(payload))
            return{
                ...state,
                token:payload,
                data:decode(payload.token)
               }
        case Types.LOGIN_SUCCESS:
            delete payload.data
            return{
                ...state,
                success:payload
            }
        case Types.LOGIN_ERROR:
            return{
                ...state,
                error:payload
            }
        case Types.REGISTRATION:
            return {
                    ...state,
                    success:payload
                }
        case Types.REGISTRATION_ERROR:
            return{
                ...state,
                error:payload
            }
        case Types.EMPTY_USER_SUCCESS:
            return{
                ...state,
                success:payload
            }
        case Types.TAKE_TOKEN:
            return{
                ...state,
                token:payload
            }
        case Types.GET_TOKEN_WITH_REFRESH_TOKEN:
            sessionStorage.setItem('token',JSON.stringify(payload))
            return{
                ...state,
                token:payload,
                data:decode(payload.token)
            }
        case Types.EMPTY_USER_ERRORS:
            return{
                ...state,
                error:payload
            }
        case Types.LOGOUT:
            return{
                token:null,
                data:{},
                error:{},
                success:{
                    success:true,
                    type:'danger',
                    message:"Logout Successfully"
                }
            }
        case Types.LOGOUT_ERROR:
            return{
                ...state,
                error:payload
            }
        default:
            return state;
    }
}

export default AuthReducer;