import axios from "axios"
import API_URL from '../../routes/Api';
import * as Types from '../constants/PostConstant';
import {setToken, getToken} from '../../hooks/token'
export const Posts =()=>dispatch=>{
    getToken()
    setToken()
    axios.get(API_URL.POSTS).then(res=>{
        dispatch({
            type:Types.POSTS,
            payload:res.data.data
        })
    }).catch(error=>{
        dispatch({
            type:Types.POST_SUCCESS,
            payload:error.response.data
        })
    })
}


export const createPost =(data)=>dispatch=>{
    getToken()
    setToken()
    axios.post(API_URL.CREATE_POST,data).then(res=>{
      dispatch({
         type:Types.POST_SUCCESS,
         payload:res.data
      })
    }).catch(error=>{
        dispatch({
            type:Types.POST_ERROR,
            payload:error.response.data
        })
    })
}



export const Like =(data)=>dispatch=>{
    getToken()
    setToken()
    axios.post(API_URL.LIKE,data)
    .then(res=>{
        return dispatch({
            type:Types.LIKE,
            payload:res.data
        })
    }).catch(error=>{
        return dispatch({
            type:Types.LIKE_ERROR,
            payload:error.response.data
        })
    })
}