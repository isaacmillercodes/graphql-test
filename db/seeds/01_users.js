
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          name: 'Isaac', email: 'isaac@miller.com'
        },
        {
          name: 'Randy', email: 'randy@savage.com'
        },
        {
          name: 'Bob', email: 'bob@barker.com'
        },
        {
          name: 'Beyonce', email: 'beyonce@knowles.com'
        },
        {
          name: 'Sue', email: 'sue@storm.com'
        }
      ]);
    });
};
