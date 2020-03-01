'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GroupsSchema extends Schema {
  up () {
    this.create('groups', (table) => {
      table.increments()
      table.integer('member_id').unsigned().references('id').inTable('users').onDelete('CASCADE').onUpdate('CASCADE')
      table.string('title').defaultTo('Public')
      table.enu('member_type',['AUTHOR','CONTRIBUTOR','COMMENTER','VIEWER'],{ useNative: true, enumName: 'member_type'}).defaultTo('VIEWER')
      table.enu('group_type',['PUBLIC','ORG_PRIVATE','GROUP_PRIVATE','PRIVATE'],{ useNative: true, enumName: 'group_type'}).defaultTo('PUBLIC')
      table.timestamps()
    })
  }

  down () {
    this.drop('groups')
  }
}

module.exports = GroupsSchema
