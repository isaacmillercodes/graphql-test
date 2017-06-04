
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_connection').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_connection').insert([
        {
          user_one: knex('users').where('name', 'Isaac').select('id'),
          user_two: knex('users').where('name', 'Randy').select('id'),
          status: 'active'
        },
        {
          user_one: knex('users').where('name', 'Isaac').select('id'),
          user_two: knex('users').where('name', 'Bob').select('id'),
          status: 'active'
        },
        {
          user_one: knex('users').where('name', 'Isaac').select('id'),
          user_two: knex('users').where('name', 'Beyonce').select('id'),
          status: 'active'
        },
        {
          user_one: knex('users').where('name', 'Randy').select('id'),
          user_two: knex('users').where('name', 'Beyonce').select('id'),
          status: 'active'
        },
        {
          user_one: knex('users').where('name', 'Randy').select('id'),
          user_two: knex('users').where('name', 'Sue').select('id'),
          status: 'active'
        },
        {
          user_one: knex('users').where('name', 'Beyonce').select('id'),
          user_two: knex('users').where('name', 'Sue').select('id'),
          status: 'active'
        },
        {
          user_one: knex('users').where('name', 'Bob').select('id'),
          user_two: knex('users').where('name', 'Sue').select('id'),
          status: 'active'
        },
      ]);
    });
};
