'use strict'
const Group = use('App/Models/Group')
const GroupHook = exports = module.exports = {}

GroupHook.addMember = async (user) => {
   try {
     await Group.create({member_id:user.id})
   } catch (error) {
     console.log(error)
   }
}

