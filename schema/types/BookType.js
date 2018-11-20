import { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLInt } from 'graphql';

export const BookType = new GraphQLObjectType({
  name: 'BookType',
  fields: () => ({
    url: { type: GraphQLString },
    name: { type: GraphQLString },
    isbn: { type: GraphQLString },
    authors: { type: GraphQLList(GraphQLString) },
    numberOfPages: { type: GraphQLInt },
    publisher: { type: GraphQLString },
    country: { type: GraphQLString },
    mediaType: { type: GraphQLString },
    released: { type: GraphQLString },
    characters: { type: GraphQLList(GraphQLString) },
    povCharacters: { type: GraphQLList(GraphQLString) },
  })
});