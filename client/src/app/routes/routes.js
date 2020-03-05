import React, { useEffect } from 'react';
import {BrowserRouter as Router ,Switch, Route, useLocation} from 'react-router-dom';
import config from './RouteConfig';
import {isLoggedIn} from '../hooks/token';



const Routes = (props)=>{
    console.log(props)
   return(
    <Router>
        <Switch>
            {config.map((route,i)=><Route key={i} exact path={route.path} component={route.component} />)}
        </Switch>
    </Router>
   )
}



export default Routes;