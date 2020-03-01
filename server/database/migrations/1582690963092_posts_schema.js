'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */

const Schema = use('Schema')

class PostsSchema extends Schema {
  up () {
    this.create('posts', (table) => {
      table.increments()
      table.integer('author_id').unsigned().references('id').inTable('users').onDelete('CASCADE').onUpdate('CASCADE')
      table.integer('group_id').unsigned().references('id').inTable('groups').onDelete('CASCADE').onUpdate('CASCADE')
      table.string('title').notNullable()
      table.datetime('due_date').notNullable()
      table.json('post').notNullable()
      table.enu('post_type',['PUBLIC','PRIVATE'],{ useNative: true, enumName: 'post_type'}).defaultTo('PUBLIC')
      table.timestamps()
    })
  }

  down () {
    this.drop('posts')
  }
}

module.exports = PostsSchema
