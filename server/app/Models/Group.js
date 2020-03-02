'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Group extends Model {
  static get table(){
    return 'groups'
   }
    members(){
      return this.belongsTo('App/Models/User','member_id','id')
    }
    posts(){
        return this.hasMany('App/Models/Post','id','group_id')
    }
   
}

module.exports = Group
