'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Reply extends Model {
    static get table(){
        return 'replies'
    }

    posts(){
        return this.belongsTo('App/Models/Post','post_id','id')
    }
    repliers(){
        return this.belongsTo('App/Models/Reply','replier_id','id')
    }
    comments(){
        return this.belongsTo('App/Models/Comment','comment_id','comment_id','id')
    }
}

module.exports = Reply
