import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';

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
    father: { type: GraphQLString },
    mother: { type: GraphQLString },
    spouse: { type: GraphQLString },
    allegiances: { type: GraphQLList(GraphQLString) },
    books: { type: GraphQLList(GraphQLString) },
    povBooks: { type: GraphQLList(GraphQLString) },
    tvSeries: { type: GraphQLList(GraphQLString) },
    playedBy: { type: GraphQLList(GraphQLString) }
  })
});