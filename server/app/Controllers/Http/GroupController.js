'use strict'
const Group = use('App/Models/Group')

class GroupController {

    async index({request,response}){
        try {
            const group = await Group.query().with('members').with('posts').fetch()

        } catch (error) {
            
        }
    }
}

module.exports = GroupController
