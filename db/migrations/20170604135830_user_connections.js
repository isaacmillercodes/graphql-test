exports.up = knex => {
  return knex.schema.createTable('user_connection', table => {
    table.integer('user_one').references('user.id');
    table.integer('user_two').references('user.id');
    table.string('status').defaultTo('pending');
  });
};

exports.down = knex => {
  return knex.schema.dropTableIfExists('user_connection');
};
