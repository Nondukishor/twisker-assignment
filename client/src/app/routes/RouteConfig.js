import Home from '../pages/Home';
import Registration from '../pages/Registration';
import Login from '../pages/Login';
import Forgotpassword from '../pages/Forgotpassword';
import Profile from '../pages/Profile'
import Member from '../pages/Member';
import Groups from '../pages/Groups';
import CreateGroup from '../pages/CreateGroup';
import GroupView from '../pages/GroupView';


const unprotectedRoute=[
    
    {
        path:'/registration',
        component:Registration,
        exact:true
        
    },
    {
        path:'/login',
        component:Login,
        exact:true
    },
    {
        path:'/forgot-password',
        component:Forgotpassword,
        exact:true
    } 
]



const protectedRoutes = [
    {
        path:'/profile',
        component:Profile,
        exact:true
    },
    {
        path:'/member',
        component:Member,
        exact:true
    },
    {
        path:'/group/:id',
        component:GroupView,
        exact:true
    },
    {
        path:'/groups',
        component:Groups,
        exact:true
    },
    {
        path:'/create-group',
        component:CreateGroup,
        exact:true
    },
    {
        path:'/',
        component:Home,
        exact:true
    },
]

export {
    unprotectedRoute,
    protectedRoutes
};