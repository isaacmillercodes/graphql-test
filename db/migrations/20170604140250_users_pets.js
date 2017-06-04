exports.up = knex => {
  return knex.schema.createTable('pet_user', table => {
    table.integer('pet_id').references('pet.id');
    table.integer('user_id').references('users.id');
  });
};

exports.down = knex => {
  return knex.schema.dropTableIfExists('pet_user');
};
