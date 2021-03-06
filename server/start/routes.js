'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
Route.get('/',({response})=>response.status(200).json({
  status:"Your application running",
  message:"Welcome to Social site"
}))


Route.group(()=>{
  Route.post('/registration','UserController.registration').validator('Registration')
  Route.post('/login','UserController.login').validator('Login')
  Route.post('/refresh-token','UserController.loginWithRefreshToken')
}).prefix('api')

Route.group(()=>{
  Route.get('/members','UserController.index')
  Route.post('/logout','UserController.logout')
  Route.resource('/posts','PostController')
  Route.get('/get-user-post/:id','PostController.userPost')
  Route.resource('/comments','CommentController')
  Route.resource('/reply','ReplayController')
  Route.resource('/groups','GroupController')
  Route.resource('/likes','LikeController')
  Route.get('/groups-post/:id','GroupController.groupPost')
}).prefix('api').middleware(['auth:jwt'])





