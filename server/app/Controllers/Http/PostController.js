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
        post:JSON.stringify(post),
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

  /**
   * Display a single post.
   * GET posts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing post.
   * GET posts/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update post details.
   * PUT or PATCH posts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a post with id.
   * DELETE posts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = PostController
