import express from 'express';
import graphQLHTTP from 'express-graphql';
import { CONFIG } from './config';

import schema from './schema/schema';

const app = express();

app.use(graphQLHTTP({
  schema,
  graphiql: true
}))

app.listen(CONFIG.PORT, () => console.log(`Server running on localhost:${CONFIG.PORT}/graphql`));