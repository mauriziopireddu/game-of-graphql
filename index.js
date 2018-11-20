import express from 'express';
import graphQLHTTP from 'express-graphql';

import schema from './schema';

const app = express();

app.use(graphQLHTTP({
  schema,
  graphiql: true
}))

app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));