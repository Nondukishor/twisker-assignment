import axios from 'axios';
import * as Types from '../constants/GroupConstant';
import API_URL from '../../app/routes/Api';
import { setToken,getToken } from '../../app/hooks/token';

export const createNewGroup =(data)=> dispatch=>{
    getToken()
    setToken()
    axios.post(API_URL.CREATE_GROUP,data).then(res=>{
        return dispatch({
            type:Types.CREATE_GROUP,
            payload:res.data
        })
    }).catch(error=>{
        return dispatch({
            type:Types.ERROR,
            payload:error.response.data
        })
    })
}

export const fetchGroups=()=>dispatch=>{
    getToken()
    setToken()
    axios.get(API_URL.FETCH_GROUPS)
    .then(res=>{
       return dispatch({
            type:Types.FETCH_GROUPS,
            payload:res.data.data
        })
    }).catch(error=>{
        return dispatch({
            type:Types.ERROR,
            payload:error.response.data
        })
    })
    
}


export const fetchGroupByID = (id) => dispatch=>{
   getToken();
   setToken();
   axios.get(API_URL.GET_GROUP_POSTS(id)).then(res=>{
       return dispatch({
          type: Types.FETCH_GROUPS_BY_ID,
          payload:res.data
       })
   }).catch(error=>{
       return dispatch({
           type:Types.ERROR,
           payload:error.response.data
       })
   })
}


