exports.up = knex => {
  return knex.schema.createTable('user_pet', table => {
    table.integer('user_id').references('user.id');
    table.integer('pet_id').references('pet.id');
  });
};

exports.down = knex => {
  return knex.schema.dropTableIfExists('user_pet');
};
