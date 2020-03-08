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
    const {first_name,last_name,username,email,password,present_post} = request.all()
    try {
      const user = await User.create({first_name,last_name,username,email,password,present_post})
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

}

module.exports = UserController
