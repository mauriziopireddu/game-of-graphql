import {
  GraphQLSchema,
  GraphQLObjectType
} from 'graphql';

const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: '...',

  fields: () => ({
    
  })
})

export default new GraphQLSchema({
  query: QueryType,
})