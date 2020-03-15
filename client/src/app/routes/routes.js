import React from 'react';
import {connect} from 'react-redux';

import {BrowserRouter as Router ,Switch, Route} from 'react-router-dom';
import {protectedRoutes,unprotectedRoute} from './RouteConfig';
import PrivateRoute from './privateRoute';
const Routes = (props)=>{
    const {isAuthenticate} = props
    console.log(isAuthenticate)
   return(
    <Router>
        <Switch>

        {isAuthenticate && protectedRoutes.map((privateRoute,i)=><PrivateRoute 
             key={i}
             isAuthenticate={isAuthenticate}
             strict={true}
             component={privateRoute.component}
             path={privateRoute.path}
             exact={privateRoute.exact}
             />)}


           {!isAuthenticate && unprotectedRoute.map((route,i)=><Route 
            key={i} 
            strict={true}  
            exact={route.exact} 
            path={route.path} 
            component={route.component} 
            />)}

            
        </Switch>
    </Router>
   )
}

const mapStateToProps = state =>{
    return{
        isAuthenticate:state.user.isAuthenticate
    }
}

export default connect(mapStateToProps,null)(Routes);