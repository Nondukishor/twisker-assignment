'use strict'

const User = use('App/Models/User')
const Logger = use('Logger')
/**
 * Resourceful controller for interacting with users
 */
class UserController {

  async index ({response}) {
    try {
      const user = await User.all()
      return response.status(200).json({
        success:true,
        type:'success',
        message:"All user populated successfully",
        data:user
      })
    } catch (error) {
      Logger.error(error)
      return response.status(500).json({
        success:false,
        type:'danger',
        message:'server error'
      })
    }
  }

 
 
  async registration({ request, response }) {
    const {username,email,password} = request.all()
    try {
      const user = await User.create({username,email,password})
      if(user){
        return response.status(200).json({
        success:true,
        type:'success',
        message:"Registration successful",
      })}
    } catch (error) {
      return response.status(500).json({
        success:false,
        type:'danger',
        message:"server error",
      })
    }
  }


  async login({request,response,auth}){
    const {email,password} = request.all()
    try {
      const token = await auth.withRefreshToken().attempt(email, password)
      if(token){
        const user = await User.findBy('email',email)
        return response.status(200).json({
          success:true,
          type:"success",
          message:"Login successfully",
          data: await auth.withRefreshToken().generate(user, true)
        })
      }
    } catch (error) {
      Logger.error(error)
      return response.status(500).json({
        success:false,
        type:'danger',
        message:'Cannot find user with email as '+email
      })
    }
  }

  async loginWithRefreshToken({auth,response,request}){
    const {refreshToken} = request.post()
    console.log(refreshToken)
    try {
      const loginWithRefreshToken = await auth.generateForRefreshToken(refreshToken,true)
       if(loginWithRefreshToken){
        return response.status(200).json({
          success:true,
          type:"success",
          message:"Login successfully",
          data:loginWithRefreshToken
        })
       }
    } catch (error) {
      return response.status(500).json({
        success:false,
        type:'danger',
        message:"server error",
      })
    }
  }

  async logout ({auth,response}){
    try {
      const logout = await auth.logout()
      if(logout){
        return response.status(200).json({
          success:true,
          type:'success',
          message:"Logged out"
        })
      }
    } catch (error) {
      return response.status(500).json({
          success:false,
          type:'danger',
          message:"Server Error"
      })
    }
  }
}

module.exports = UserController
