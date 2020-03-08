'use strict'
const Like = use('App/Models/Like')

class LikeController {
    async index({response,request}){
        const {post_id}=request.all()
        try{
          const likes = await Like.query().where('post_id',post_id)
          return Response.status(200).json({
              success:true,
              type:'success',
              message:"Like populated successfully",
              data:likes
          })
        }catch(error){
            return response.status(500).json({
                success:false,
                type:'danger',
                message:"Server error"
            })
        }
    }


    async store({request,response}){
    const {liker_id,post_id,liked} = request.all()
      try{
         await Like.create({liker_id, post_id,likes:liked})
         return response.status(300).json({
              success:true,
              type:'success',
              message:'Successfully liked'
        })
      }catch(error){
          return response.status(500).json({
              success:false,
              type:'danger',
              message:'Server Error'
          })
      }
    }
}

module.exports = LikeController
