'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Post extends Model {
    static get table(){
        return 'posts'
      }
    users(){
        return this.belongsTo('App/Models/User','author_id','id')
    }
    groups(){
        return this.belongsToMany('App/Models/Group','group_id','id')
    }
    comments(){
        return this.hasMany('App/Models/Comment','id','commenter_id')
    }
}

module.exports = Post
