'use strict'
const Post = use('App/Models/Post')
const Logger = use('Logger')

class PostController {
 
  async index ({ request, response, view }) {
    try {
      const post = await Post.query().with('users',builder=>builder.select(['id','username','email'])).orderBy('id', 'desc').fetch()
      return response.status(200).json({
        success:true,
        type:"success",
        message:"Post populated successfully",
        data:post
      })
    } catch (error) {
      Logger.error(error)
      return response.status(500).json({
        success:true,
        type:'danger',
        message:"Server Error"
      })
    }
  }

  async store ({ request, response }) {

    const {author_id,group_id,title,due_date,post,post_type} = request.all();
  
    try{
      const posts = await Post.create({
        author_id,
        group_id,
        title,
        due_date:new Date(Date.parse(due_date)),
        post:JSON.stringify(post),//post type json because post has multiple data type like picture, file and also bullet point post
        post_type
      })
      if(posts){
        return response.status(200).json({
          success:true,
          type:"success",
          message:"Posted successfully"
        })
      } 
    }
    catch(error){
      Logger.error(error)
      return response.status(500).json({
        message:"Server Error",
        success:false,
        type:'danger'
      })
    }
  }


  async show ({ params, response}) {
    try {
      const post = await Post.find(params.id)
      return response.status(200).json({
        success:true,
        type:'success',
        message:'Showed',
        data:post
      })
    } catch (error) {
      return response.status(500).json({
        success:false,
        type:'danger',
        message:'Server Error'
      })
    }
  }

 
  async edit ({ params, response}) {
    try {
      const post = await Post.find(params.id)
      return response.status(200).json({
        success:true,
        type:"success",
        message:"Post showing",
        data:post
      })
    } catch (error) {
      return response.status(500).json({
        success:false,
        type:'danger',
        message:'Server Error'
      })
    }
  }

  async update ({ params,response}) {
    try {
      const post = await Post.query().where('id',params.id).update({
        author_id,
        group_id,
        title,
        due_date:new Date(Date.parse(due_date)),
        post:JSON.stringify(post),
        post_type
      })
    } catch (error) {
      
    }
  }


  async destroy ({ params, request, response }) {
    try {
      const post = await Post.find(params.id)
                   await post.delete()
      return response.status(200).json({
        success:true,
        type:"success",
        message:"Post deleted Successfully"
      })
    } catch (error) {
      return response.status(500).json({
        success:false,
        type:'danger',
        message:'Server Error'
      })
    }
  }
}

module.exports = PostController
