
exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', tbl => {
      tbl.increments();
      tbl.string('action_description',128).notNullable();
      tbl.string('action_notes').notNullable();
      tbl.boolean("action_completed").notNullable();
      //foreign key
      tbl.integer('project_id')
           .unsigned()
           .references('id')
           .inTable('projects')
           .onDelete("CASCADE")
           .onUpdate('CASCADE')


    })
   };
   exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions')
   };


   