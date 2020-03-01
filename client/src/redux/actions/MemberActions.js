import axios from 'axios';
import API_URL from '../../app/routes/Api';
import * as Types from '../constants/MemberConstant';

export const MemberActions = () => dispatch =>{
   axios.get(API_URL.MEMBERS).then(res=>{
     dispatch({
         type:Types.MEMBERS,
         payload: res.data
     })
   }).catch(error=>{
       dispatch({
           type:Types.ERROR,
           payload:error.response.data
       })
   })  
}