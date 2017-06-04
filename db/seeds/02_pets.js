
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('pet').del()
    .then(function () {
      // Inserts seed entries
      return knex('pet').insert([
        {
          name: 'Cyrus',
          species: 'Dog',
          breed: 'Chihuahua Mix',
          age: 3
        },
        {
          name: 'Sam',
          species: 'Cat',
          breed: 'Siamese',
          age: 5
        },
        {
          name: 'Greg',
          species: 'Bird',
          breed: 'Cockatoo',
          age: 23
        },
        {
          name: 'Darrel',
          species: 'Dog',
          breed: 'Golden Retriever',
          age: 1
        },
        {
          name: 'Barry',
          species: 'Fish',
          breed: 'Beta',
          age: 2
        },
        {
          name: 'Mr. Meowmers',
          species: 'Cat',
          breed: 'Tabby',
          age: 8
        },
        {
          name: 'Niles',
          species: 'Snake',
          breed: 'Ball Python',
          age: 6
        },
        {
          name: 'Rufus',
          species: 'Dog',
          breed: 'Pug',
          age: 11
        },
      ]);
    });
};
