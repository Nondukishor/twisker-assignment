import axios from 'axios';

export const setToken = () =>{
  const token = JSON.parse(window.localStorage.getItem('token'))
   if(token)
   return axios.defaults.headers.common['Authorization']=`Bearer ${token.token}`;
   else
    delete axios.defaults.headers.common['Authorization']
}

