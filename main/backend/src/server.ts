import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';

// 1. Define your GraphQL schema
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// 2. Define resolver functions for your schema fields
const root = {
  hello: () => 'Hello, world!',
};

async function startServer() {
  // 3. Create an Express app
  const app = express();

  // 4. Setup GraphQL endpoint with express-graphql
  //    schema: your GraphQL schema
  //    rootValue: provides resolver functions for your schema
  //    graphiql: provides a GraphiQL UI at /graphql for testing
  app.use(
    '/graphql',
    graphqlHTTP({
      schema,
      rootValue: root,
      graphiql: true, // enable GraphiQL in development
    })
  );

  // 5. Start listening
  const PORT = 4000;
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/graphql`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start the server:', err);
});
