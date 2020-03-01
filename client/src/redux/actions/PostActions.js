import axios from "axios"
import API_URL from '../../app/routes/Api';
import * as Types from '../constants/PostConstant';
import {setToken} from '../../app/hooks/token'
export const Posts =()=>dispatch=>{
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