exports.up = knex => {
  return knex.schema.createTable('user', table => {
    table.increments();
    table.string('name');
    table.string('email');
  });
};

exports.down = knex => {
  return knex.schema.dropTableIfExists('user');
};
