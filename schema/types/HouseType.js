import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';

export const HouseType = new GraphQLObjectType({
  name: 'HouseType',
  fields: () => ({
    name: { type: GraphQLString },
    region: { type: GraphQLString },
    coatOfArms: { type: GraphQLString },
    words: { type: GraphQLString },
    titles: { type: GraphQLList(GraphQLString) },
    seats: { type: GraphQLList(GraphQLString) },
    currentLord: { type: GraphQLString },
    heir: { type: GraphQLString },
    overlord: { type: GraphQLString },
    founded: { type: GraphQLString },
    founder: { type: GraphQLString },
    diedOut: { type: GraphQLString },
    ancestralWeapons: { type: GraphQLList(GraphQLString) },
    cadetBranches: { type: GraphQLList(GraphQLString) },
    swornMembers: { type: GraphQLList(GraphQLString) },
  })
});