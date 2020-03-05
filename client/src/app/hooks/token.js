import axios from 'axios';
import decode from 'jwt-decode';
import {getRefreshToken} from '../../redux/actions/AuthActions';
import store from '../../redux'
export const setToken = () =>{
  const token = JSON.parse(sessionStorage.getItem('token'))
   if(token)
   return axios.defaults.headers.common['Authorization']=`Bearer ${token.token}`;
   else
    delete axios.defaults.headers.common['Authorization']
}

export const isLoggedIn=()=>(JSON.parse(sessionStorage.getItem('token'))) ? true : false;

export const getToken=()=>{
  const auth = JSON.parse(sessionStorage.getItem('token'))
  if(!auth){
    window.location='/login'
  }else if(auth.token){
     const user = decode(auth.token)
     const now = new Date().getTime()
    //  console.log(user.exp<now, 'deference', now-user.exp)
     if(user.exp < now){
      store.dispatch(getRefreshToken(auth.refreshToken))
     }
   }

}

