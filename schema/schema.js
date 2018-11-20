import { GraphQLObjectType, GraphQLSchema, GraphQLID } from 'graphql';
import fetch from 'node-fetch';
import { CONFIG } from '../config';
import { CharacterType } from './types/CharacterType';

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    character: {
      type: CharacterType,
      args: { id: { type: GraphQLID } },
      resolve: (parent, args) =>
        fetch(`${CONFIG.BASE_URL}/characters/${args.id}`)
          .then(res => res.json())
    }
  }
});

export const schema = new GraphQLSchema({ query: RootQuery });