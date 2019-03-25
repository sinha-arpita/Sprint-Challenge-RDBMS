
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {action_description:'action6',action_notes:'six',action_completed:0,project_id:2},
        {action_description:'action11',action_notes:'eleven',action_completed:0,project_id:1},
        {action_description:'action4',action_notes:'four',action_completed:0,project_id:3},
        {action_description:'action9',action_notes:'nine',action_completed:0,project_id:2},
        {action_description:'action8',action_notes:'eight',action_completed:0,project_id:3},
        {action_description:'action7',action_notes:'seven',action_completed:0,project_id:1},
      ]);
    });
};
