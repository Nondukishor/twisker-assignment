import Home from '../pages/Home';
import Registration from '../pages/Registration';
import Login from '../pages/Login';
import Forgotpassword from '../pages/Forgotpassword';
import Profile from '../pages/Profile'
import Member from '../pages/Member';
import Groups from '../pages/Groups';

const config=[
    {
        path:'/',
        component:Home
    },
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
    {
        path:'/profile',
        component:Profile
    },
    {
        path:'/member',
        component:Member
    },
    {
        path:'/groups',
        component:Groups
    }
]

export default config;