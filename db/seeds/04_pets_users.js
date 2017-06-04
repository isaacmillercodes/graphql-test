
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('pet_user').del()
    .then(function () {
      // Inserts seed entries
      return knex('pet_user').insert([
        {
          pet_id: knex('pet').where('name', 'Cyrus').select('id'),
          user_id: knex('users').where('name', 'Isaac').select('id')
        },
        {
          pet_id: knex('pet').where('name', 'Mr. Meowmers').select('id'),
          user_id: knex('users').where('name', 'Isaac').select('id')
        },
        {
          pet_id: knex('pet').where('name', 'Mr. Meowmers').select('id'),
          user_id: knex('users').where('name', 'Randy').select('id')
        },
        {
          pet_id: knex('pet').where('name', 'Sam').select('id'),
          user_id: knex('users').where('name', 'Randy').select('id')
        },
        {
          pet_id: knex('pet').where('name', 'Greg').select('id'),
          user_id: knex('users').where('name', 'Bob').select('id')
        },
        {
          pet_id: knex('pet').where('name', 'Darrel').select('id'),
          user_id: knex('users').where('name', 'Bob').select('id')
        },
        {
          pet_id: knex('pet').where('name', 'Barry').select('id'),
          user_id: knex('users').where('name', 'Beyonce').select('id')
        },
        {
          pet_id: knex('pet').where('name', 'Niles').select('id'),
          user_id: knex('users').where('name', 'Beyonce').select('id')
        },
        {
          pet_id: knex('pet').where('name', 'Rufus').select('id'),
          user_id: knex('users').where('name', 'Sue').select('id')
        }
      ]);
    });
};
