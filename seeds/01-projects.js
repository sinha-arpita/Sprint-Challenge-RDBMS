
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {project_name:'blue whale',project_description:'blue',project_completed:1},
        {project_name:'green whale',project_description:'green ',project_completed:0},
        {project_name:'black whale',project_description:'black',project_completed:0}
      ])
    });
};
