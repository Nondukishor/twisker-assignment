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

  async show ({ params,response}) {
    try {
      const comment = await Comment.find(params.id)
      return response.status(200).json({
        success:true,
        type:'success',
        message:"Comment showed",
        data:comment
      })
    } catch (error) {
      return response.status(500).json({
        success:false,
        type:'danger',
        message:"Server Error"
      })
    }
  }

  async edit ({ params, response}) {
    try {
      const comment = await Comment.find(params.id)
      return response.status(200).json({
        success:true,
        type:'success',
        message:"Comment showed",
        data:comment
      })
    } catch (error) {
      return response.status(500).json({
        success:false,
        type:'danger',
        message:"Server Error"
      })
    }
  }

  async update ({ params, request, response }) {
    const {post_id,commenter_id,comment} = request.all()
    try {
      const comment = await Comment.query().where('id',params.id).update({post_id,commenter_id,comment})
      return response.status(200).json({
        success:true,
        type:'success',
        message:"Comment showed",
        data:comment
      })
    } catch (error) {
      return response.status(500).json({
        success:false,
        type:'danger',
        message:"Server Error"
      })
    }
  }

  async destroy ({ params, response }) {
    try {
      const comment = await Comment.find(params.id)
      const commentDelete =await comment.delete()
     if(commentDelete)
        return response.status(200).json({
            success:true,
            type:'success',
            message:"Deleted Successfully"
        })
    } catch (error) {
      return response.status(500).json({
        success:false,
        type:'danger',
        message:"Server Error"
      })
    }
  }
}

module.exports = CommentController
