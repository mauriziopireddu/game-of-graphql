import { GraphQLList, GraphQLObjectType, GraphQLString } from 'graphql';
import fetch from 'node-fetch';
import { BookType } from './BookType';
import { HouseType } from './HouseType';

export const CharacterType = new GraphQLObjectType({
  name: 'CharacterType',
  fields: () => ({
    url: { type: GraphQLString },
    name: { type: GraphQLString },
    gender: { type: GraphQLString },
    culture: { type: GraphQLString },
    born: { type: GraphQLString },
    died: { type: GraphQLString },
    titles: { type: GraphQLList(GraphQLString) },
    aliases: { type: GraphQLList(GraphQLString) },
    father: {
      type: CharacterType,
      resolve: (parent, args) => fetch(parent.father)
        .then(res => res.json())
        .catch(err => '')
    },
    mother: {
      type: CharacterType,
      resolve: (parent, args) => fetch(parent.mother)
        .then(res => res.json())
        .catch(err => '')
    },
    spouse: {
      type: CharacterType,
      resolve: (parent, args) => fetch(parent.spouse)
        .then(res => res.json())
        .catch(err => '')
    },
    allegiances: {
      type: GraphQLList(HouseType),
      resolve: (parent, args) =>
        parent.allegiances
          .map(allegiance => fetch(allegiance)
            .then(res => res.json())
            .catch(err => [])
          )
    },
    books: {
      type: GraphQLList(BookType),
      resolve: (parent, args) =>
        parent.books
          .map(book => fetch(book)
            .then(res => res.json())
            .catch(err => [])
          )
    },
    povBooks: {
      type: GraphQLList(BookType),
      resolve: (parent, args) =>
        parent.povBooks
          .map(book => fetch(book)
            .then(res => res.json())
            .catch(err => [])
          )
    },
    tvSeries: { type: GraphQLList(GraphQLString) },
    playedBy: { type: GraphQLList(GraphQLString) }
  })
});