exports.up = knex => {
  return knex.schema.createTable('pet', table => {
    table.increments();
    table.string('name');
    table.string('species');
    table.string('breed');
    table.integer('age');
  });
};

exports.down = knex => {
  return knex.schema.dropTableIfExists('pet');
};
