exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', tbl => {
      tbl.increments();
      tbl.string('project_name').notNullable().unique();
      tbl.string('project_description',128).notNullable();
      tbl.boolean("project_completed").notNullable();


    })
   };
   exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('projects')
   };

