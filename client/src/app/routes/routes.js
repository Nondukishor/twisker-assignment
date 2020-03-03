import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router ,Switch, Route, Redirect} from 'react-router-dom';
import * as Types from '../../redux/constants/AuthConstant';
import {getRefreshToken} from '../../redux/actions/AuthActions'
import config from './RouteConfig';
import store from '../../redux';

const Routes = ()=>{
    const [users] = useState(()=>JSON.parse(localStorage.getItem('token')))
    const {user:{token},post:{success:{error}}} = store.getState()
    useEffect(()=>{
     if(users){
        store.dispatch(getRefreshToken(users.refreshToken)) 
     }
    },[token,error])
   return(
    <Router>
        <Switch>
            {config.map((route,i)=><Route key={i} exact path={route.path} component={route.component} />)}
        </Switch>
    </Router>
   )
}



export default Routes;