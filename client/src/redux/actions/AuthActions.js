import axios from 'axios';
import * as Types from '../constants/AuthConstant';
import {emptyMessage} from './GlobalActions';
import API_URL from '../../app/routes/Api';

export const LOGIN = (data) => dispatch=> {
    axios.post(API_URL.LOGIN,data).then(res=>{
        dispatch({type:Types.LOGIN,payload:res.data.data})
        dispatch({type:Types.LOGIN_SUCCESS,payload:res.data})
        return dispatch(emptyMessage({
            type:Types.EMPTY_USER_SUCCESS,
            payload:{}
        }))
    }).catch(error=>{
        dispatch({
            type:Types.LOGIN_ERROR,
            payload:error.response.data
        })
        return dispatch(emptyMessage({
            type:Types.EMPTY_USER_ERRORS,
            payload:{}
        }))
    })
}



export const REGISTRATION = (data) =>dispatch=>{
    axios.post(API_URL.REGISTRATION,data).then(res=>{
         dispatch({
            type:Types.REGISTRATION,
            payload:res.data
        })
        return dispatch(emptyMessage({
            type:Types.EMPTY_USER_SUCCESS,
            payload:{}
        }))
    }).catch(error=>{
            dispatch({
                type:Types.REGISTRATION_ERROR,
                payload:error.response.data
            })
        return dispatch(emptyMessage({
            type:Types.EMPTY_USER_ERRORS,
            payload:{}
        }))
    })
}




export const LOGIN_SUCCESS = () =>{
   return{
       type:Types.LOGIN_SUCCESS,
       payload:[]
   }
}

export const REGISTRATION_SUCCESS = () =>{
    return{
        type:Types.REGISTRATION_SUCCESS,
        payload:[]
    }
}


export const REGISTRATION_ERROR = ()=>{
    return{
        types:Types.REGISTRATION_ERROR,
        payload:[]
    }
}



