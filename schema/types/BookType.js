import { GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLString } from 'graphql';
import fetch from 'node-fetch';
import { CharacterType } from './CharacterType';

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
    characters: {
      type: GraphQLList(CharacterType),
      resolve: (parent, args) =>
        parent.characters
          .map(character => fetch(character).then(res => res.json()))
    },
    povCharacters: {
      type: GraphQLList(CharacterType),
      resolve: (parent, args) =>
        parent.povCharacters
          .map(character => fetch(character).then(res => res.json()))
    },
  })
});