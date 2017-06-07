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
        return knex.select('*').from('users').where('user_one', parentValue.id).orWhere('user_two', parentValue.id).join('user_connection', function() {
          this.on('user_one', '=', 'users.id').orOn('user_two', '=', 'users.id');
        });
      }
    }
    // company: {
    //   type: CompanyType,
    //   resolve(parentValue, args) {
    //     return axios.get(`http://localhost:3000/companies/${parentValue.companyId}`).then(resp => resp.data);
    //   }
    // }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLInt} },
      resolve(parentValue, args) {
        return knex('users').where('id', args.id).then(response => response[0]);
      }
    },
    // company: {
    //   type: CompanyType,
    //   args: { id: { type: GraphQLString } },
    //   resolve(parentValue, args) {
    //     return axios.get(`http://localhost:3000/companies/${args.id}`).then(resp => resp.data);
    //   }
    // }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
