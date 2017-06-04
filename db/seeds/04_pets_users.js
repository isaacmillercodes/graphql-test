
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('pet_user').del()
    .then(function () {
      // Inserts seed entries
      return knex('pet_user').insert([
        {
          pet_id: knex('users').where('name', 'Isaac').select('id'),
          user_id: knex('pet').where('name', 'Cyrus').select('id')
        },
        // {
        //   pet_id: knex('users').where('name', 'Isaac').select('id'),
        //   user_id: knex('pet').where('name', 'Mr. Meowmers').select('id')
        // },
        // {
        //   pet_id: knex('users').where('name', 'Randy').select('id'),
        //   user_id: knex('pet').where('name', 'Mr. Meowmers').select('id')
        // },
        // {
        //   pet_id: knex('users').where('name', 'Randy').select('id'),
        //   user_id: knex('pet').where('name', 'Sam').select('id')
        // },
        // {
        //   pet_id: knex('users').where('name', 'Bob').select('id'),
        //   user_id: knex('pet').where('name', 'Greg').select('id')
        // },
        // {
        //   pet_id: knex('users').where('name', 'Bob').select('id'),
        //   user_id: knex('pet').where('name', 'Darrel').select('id')
        // },
        // {
        //   pet_id: knex('users').where('name', 'Beyonce').select('id'),
        //   user_id: knex('pet').where('name', 'Barry').select('id')
        // },
        // {
        //   pet_id: knex('users').where('name', 'Beyonce').select('id'),
        //   user_id: knex('pet').where('name', 'Niles').select('id')
        // },
        // {
        //   pet_id: knex('users').where('name', 'Sue').select('id'),
        //   user_id: knex('pet').where('name', 'Rufus').select('id')
        // }
      ]);
    });
};
