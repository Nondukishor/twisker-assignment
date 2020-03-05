import Home from '../pages/Home';
import Registration from '../pages/Registration';
import Login from '../pages/Login';
import Forgotpassword from '../pages/Forgotpassword';
import Profile from '../pages/Profile'
import Member from '../pages/Member';
import Groups from '../pages/Groups';
import CreateGroup from '../pages/CreateGroup';
import GroupView from '../pages/GroupView'
const config=[
    {
        path:'/',
        component:Home
    },
    {
        path:'/profile',
        component:Profile
    },
    {
        path:'/member',
        component:Member
    },
    {
        path:'/group/:id',
        component:GroupView
    },
    {
        path:'/groups',
        component:Groups
    },
    {
        path:'/create-group',
        component:CreateGroup
    },
    
]


const authRoutes =[
    {
        path:'/login',
        component:Login
    },
    {
        path:'/registration',
        component:Registration
    },
    {
        path:'/forgot-password',
        component:Forgotpassword
    },
]




config.push(...authRoutes)




export default config;