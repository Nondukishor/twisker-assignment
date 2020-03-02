'use strict'
const Reply = use('App/Models/Reply')

class ReplyController {

  async index ({ request, response, view }) {
    try {
      const replies = await Reply.all()
      return response.status(200).json({
        success:true,
        type:'success',
        message:"Reply populated Successfully",
        data:replies
      })
    } catch (error) {
      return response.status(500).json({
        success:false,
        type:'danger',
        message:'Server Error'
      })
    }
  }



  async store ({ request, response }) {
    try {
      const reply = await Reply.create({post_id,replier_id,comment_id,reply})
      if(reply){
        return response.status(200).json({
          success:true,
          type:'success',
          message:'Replied',
          data:reply
        })
      }
    } catch (error) {
       return response.status(500).json({
         success:false,
         type:'danger',
         message:'Server Error'
       })
    }
  }

  async show ({ params, request, response, view }) {
  }

  async edit ({ params, request, response, view }) {
  }

  async update ({ params, request, response }) {
  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = ReplyController
