import { GraphQLObjectType, GraphQLSchema, GraphQLID, GraphQLList } from 'graphql';
import fetch from 'node-fetch';
import { CONFIG } from '../config';
import { CharacterType } from './types/CharacterType';
import { HouseType } from './types/HouseType';

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    characters: {
      type: GraphQLList(CharacterType),
      resolve: (parent, args) =>
        fetch(`${CONFIG.BASE_URL}/characters`)
          .then(res => res.json())
    },
    houses: {
      type: GraphQLList(HouseType),
      resolve: (parent, args) =>
        fetch(`${CONFIG.BASE_URL}/houses`)
          .then(res => res.json())
    },
    character: {
      type: CharacterType,
      args: { id: { type: GraphQLID } },
      resolve: (parent, args) =>
        fetch(`${CONFIG.BASE_URL}/characters/${args.id}`)
          .then(res => res.json())
    },
    house: {
      type: HouseType,
      args: { id: { type: GraphQLID } },
      resolve: (parent, args) =>
        fetch(`${CONFIG.BASE_URL}/houses/${args.id}`)
          .then(res => res.json())
    },
  }
});

export const schema = new GraphQLSchema({ query: RootQuery });