import { GraphQLList, GraphQLObjectType, GraphQLString } from 'graphql';
import fetch from 'node-fetch';
import { CharacterType } from './CharacterType';

export const HouseType = new GraphQLObjectType({
  name: 'HouseType',
  fields: () => ({
    name: { type: GraphQLString },
    region: { type: GraphQLString },
    coatOfArms: { type: GraphQLString },
    words: { type: GraphQLString },
    titles: { type: GraphQLList(GraphQLString) },
    seats: { type: GraphQLList(GraphQLString) },
    currentLord: {
      type: CharacterType,
      resolve: (parent, args) => fetch(parent.currentLord)
        .then(res => res.json())
        .catch(err => '')
    },
    heir: {
      type: CharacterType,
      resolve: (parent, args) => fetch(parent.heir)
        .then(res => res.json())
        .catch(err => '')
    },
    overlord: {
      type: HouseType,
      resolve: (parent, args) => fetch(parent.overlord)
        .then(res => res.json())
        .catch(err => '')
    },
    founded: { type: GraphQLString },
    founder: {
      type: CharacterType,
      resolve: (parent, args) => fetch(parent.founder)
        .then(res => res.json())
        .catch(err => '')
    },
    diedOut: { type: GraphQLString },
    ancestralWeapons: { type: GraphQLList(GraphQLString) },
    cadetBranches: {
      type: GraphQLList(HouseType),
      resolve: (parent, args) =>
        parent.cadetBranches
          .map(branch => fetch(branch)
            .then(res => res.json())
            .catch(err => [])
          )
    },
    swornMembers: {
      type: GraphQLList(CharacterType),
      resolve: (parent, args) =>
        parent.swornMembers
          .map(swornMember => fetch(swornMember)
            .then(res => res.json())
            .catch(err => [])
          )
    },
  })
});