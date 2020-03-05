import axios from 'axios';
import * as Types from '../constants/GroupConstant';
import API_URL from '../../app/routes/Api';
import { setToken,getToken } from '../../app/hooks/token';

export const createNewGroup =(data)=> dispatch=>{
    getToken()
    setToken()
    axios.post(API_URL.CREATE_GROUP,data).then(res=>{
        dispatch({
            type:Types.CREATE_GROUP,
            payload:res.data
        })
    }).catch(error=>{
        dispatch({
            type:Types.ERROR,
            payload:error.response.data
        })
    })
}

export const groups=()=>dispatch=>{
    getToken()
    setToken()
    axios.get(API_URL.FETCH_GROUPS).then(res=>{
        dispatch({
            type:Types.FETCH_GROUPS,
            payload:res.data.data
        })
    }).catch(error=>{
        dispatch({
            type:Types.ERROR,
            payload:error.response.data
        })
    })
    
}


export const groupPost = (id) => dispatch=>{
   getToken()
   setToken();
   axios.get(API_URL.GET_GROUP_POSTS(id)).then(res=>{
       dispatch({
          type: Types.GET_GROUP_POSTS,
          payload:res.data
       })
   }).catch(error=>{
       dispatch({
           type:Types.ERROR,
           payload:error.response.data
       })
   })
}


