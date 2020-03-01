'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RepliesSchema extends Schema {
  up () {
    this.create('replies', (table) => {
      table.increments()
      table.integer('post_id').unsigned().references('id').inTable('posts').onDelete('CASCADE').onUpdate('CASCADE').notNullable()
      table.integer('replier_id').unsigned().references('id').inTable('users').onDelete('CASCADE').onUpdate('CASCADE').notNullable()
      table.integer('comment_id').unsigned().references('id').inTable('comments').onDelete('CASCADE').onUpdate('CASCADE').notNullable()
      table.string('reply').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('replies')
  }
}

module.exports = RepliesSchema
