const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./db/schema/schema');
const knex = require('./db/knex');

const app = express();

app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

// app.use('/test', (req, res) => {
//   knex('users').where('id', 1).then(response => {
//     console.log(response);
//   });
// });

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
