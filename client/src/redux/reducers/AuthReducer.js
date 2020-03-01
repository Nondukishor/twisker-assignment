import * as Types from '../constants/AuthConstant';

const initialState = {
                token:{},
                data:{},
                error:{},
                success:{}
            }


function AuthReducer(state=initialState,actions) {
    const { type,payload }= actions;
    
    switch(type){
        case Types.LOGIN:
            localStorage.setItem('token',JSON.stringify(payload))
            return{
                ...state,
                token:payload
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
        case Types.EMPTY_USER_ERRORS:
            return{
                ...state,
                error:payload
            }
        default:
            return state;
    }
}

export default AuthReducer;