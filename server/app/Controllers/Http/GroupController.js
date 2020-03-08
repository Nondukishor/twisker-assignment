'use strict'
const Group = use('App/Models/Group')

class GroupController {

    async index({response}){
        try {

            const groups = await Group.query().with('members').with('posts').fetch()

            if(groups){
                return response.status(200).json({
                    success:true,
                    type:'success',
                    message:'All Groups populated successfully',
                    data:groups
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



    async groupPost({params,response}){
        try {
            const groups = await Group.query().with('members').with('posts').where('id',params.id).fetch()

            if(groups){
                return response.status(200).json({
                    success:true,
                    type:'success',
                    message:'All Groups populated successfully',
                    data:groups
                })
            }
        } catch (error) {
           return response.status(500).json({
               success:true,
               type:"danger",
               message:"server Error"
           }) 
        }
    }

  async store({request,response}){
      const {title,group_type,member_id,member_type} = request.all()
        try {
            const group = await Group.create({
                member_id,
                title,
                member_type,
                group_type
            })
            if(group){
                return response.status(200).json({
                    success:true,
                    type:'success',
                    message:"Group Created successfully"
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

  async show({params}){
      const {id} =params
    try {
        const group = await Group.find(id)
        if(group){
            return response.status(200).json({
                success:true,
                type:'success',
                message:'Group found Success fully'
            })
        }
    } catch (error) {
        return response.status(500).json({
            success:false,
            type:'danger',
            message:'Group not found'
        })
    }
  }
}

module.exports = GroupController
