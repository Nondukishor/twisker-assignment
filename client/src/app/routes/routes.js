import React from 'react';
import {BrowserRouter as Router ,Switch, Route} from 'react-router-dom';
import config from './RouteConfig';
const Routes = ()=>{
   return(
    <Router>
        <Switch>
            {config.map((route,i)=><Route key={i} exact path={route.path} component={route.component} />)}
        </Switch>
    </Router>
   )
}

export default Routes;