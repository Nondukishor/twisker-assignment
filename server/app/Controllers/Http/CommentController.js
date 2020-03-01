'use strict'
const Comment = use('App/Models/Comment')

class CommentController {

  async index ({response}) {
    try {
      const comment = await Comment.query().with('post').with('commenter').fetch()
      if(comment){
        return response.status(200).json({
          success:true,
          type:"success",
          message:"Comments populated Successfully",
          data:comment
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


  async store ({ request, response }) {
    const {post_id,commenter_id,comment} = request.all()
    try{
      const createComment = await Comment.create({post_id,commenter_id,comment})
      if(createComment){
        return response.status(200).json({
          success:true,
          type:'success',
          message:"Comment Success fully published",
          data:createComment
        })
      }
    }catch(error){
      return response.status(500).json({
        success:false,
        type:'danger',
        message:"Server Error"
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

module.exports = CommentController
