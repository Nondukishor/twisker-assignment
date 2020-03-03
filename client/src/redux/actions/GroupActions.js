import React from 'react';
import axios from 'axios';
import * as Types from '../constants/GroupConstant';
import API_URL from '../../app/routes/Api';
import { setToken } from '../../app/hooks/token';

export const createNewGroup =(data)=> dispatch=>{
    axios.post(API_URL.CREATE_GROUP).then(res=>{
        dispatch({
            type:Types.CREATE_GROUP,
            payload:res.data.data
        })
    }).catch(error=>{
        dispatch({
            type:Types.ERROR,
            payload:error.response.data
        })
    })
}

export const groups=()=>dispatch=>{
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