'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Comment extends Model {
    static get table(){
        return 'comments'
      }

      post(){
        return this.belongsTo('App/Models/Post','post_id','id')
      }
      commenter(){
        return this.belongsTo('App/Models/User','commenter_id','id')
      }
}

module.exports = Comment
