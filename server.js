const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./db/schema/schema');
const knex = require('./db/knex');

const app = express();

app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

app.use('/test/:id', (req, res) => {
  knex('pet_user').where('user_id', req.params.id)
  .join('pet', 'pet_user.pet_id', '=', 'pet.id')
  .then(results => {res.send(results);});

  // knex('user_connection').where('user_one', req.params.id).orWhere('user_two', req.params.id).innerJoin('users', function() {
  //   this.onNotIn('users.id', req.params.id).on('user_connection.user_one', '=', 'users.id').orOn('user_connection.user_two', '=', 'users.id');
  // }).then(resp => {
  //   res.send(resp);
  // });
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
