import { GraphQLObjectType, GraphQLSchema, GraphQLID, GraphQLList } from 'graphql';
import fetch from 'node-fetch';
import { CONFIG } from '../config';
import { CharacterType } from './types/CharacterType';
import { HouseType } from './types/HouseType';
import { BookType } from './types/BookType';

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    // character ------------------------------------------------------------------------------
    characters: {
      type: GraphQLList(CharacterType),
      resolve: (parent, args) =>
        fetch(`${CONFIG.BASE_URL}/characters`)
          .then(res => res.json())
    },
    character: {
      type: CharacterType,
      args: { id: { type: GraphQLID } },
      resolve: (parent, args) =>
        fetch(`${CONFIG.BASE_URL}/characters/${args.id}`)
          .then(res => res.json())
    },
    // house ----------------------------------------------------------------------------------
    houses: {
      type: GraphQLList(HouseType),
      resolve: (parent, args) =>
        fetch(`${CONFIG.BASE_URL}/houses`)
          .then(res => res.json())
    },
    house: {
      type: HouseType,
      args: { id: { type: GraphQLID } },
      resolve: (parent, args) =>
        fetch(`${CONFIG.BASE_URL}/houses/${args.id}`)
          .then(res => res.json())
    },
    // book -----------------------------------------------------------------------------------
    books: {
      type: GraphQLList(BookType),
      resolve: (parent, args) =>
        fetch(`${CONFIG.BASE_URL}/books`)
          .then(res => res.json())
    },
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve: (parent, args) =>
        fetch(`${CONFIG.BASE_URL}/books/${args.id}`)
          .then(res => res.json())
    },
  }
});

export const schema = new GraphQLSchema({ query: RootQuery });