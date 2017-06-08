const graphql = require('graphql');
const knex = require('../knex');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} = graphql;

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    email: { type: GraphQLString},
    users: {
      type: new GraphQLList(UserType),
      resolve(parentValue, args) {
        return knex('user_connection').where('user_one', parentValue.id).orWhere('user_two', parentValue.id)
        .join('users', function() {
          this.on('user_connection.user_one', '=', 'users.id').orOn('user_connection.user_two', '=', 'users.id');
        }).then(results => {
          return results.filter(user => {
            return user.id !== parentValue.id && user.status === 'active';
          });
        });
      }
    },
    pets: {
      type: new GraphQLList(PetType),
      resolve(parentValue, args) {
        return knex('pet_user').where('user_id', parentValue.id)
        .join('pet', 'pet_user.pet_id', '=', 'pet.id')
        .then(results => results);
      }
    }
  })
});

const PetType = new GraphQLObjectType({
  name: 'Pet',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    species: { type: GraphQLString },
    breed: { type: GraphQLString },
    age: { type: GraphQLInt },
    users: {
      type: new GraphQLList(UserType),
      resolve(parentValue, args) {
        return knex('pet_user').where('pet_id', parentValue.id)
        .join('users', 'pet_user.user_id', '=', 'users.id')
        .then(results => results);
      }
    }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLInt} },
      resolve(parentValue, args) {
        return knex('users').where('id', args.id).then(results => results[0]);
      }
    },
    pet: {
      type: PetType,
      args: { id: { type: GraphQLInt } },
      resolve(parentValue, args) {
        return knex('pet').where('id', args.id).then(results => results[0]);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
