import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';

import typeDef from './schema';
import resolvers from './resolvers';
import { graphiqlExpress } from 'apollo-server-express/dist/expressApollo';

export const schema = makeExecutableSchema({
    typeDef,
    resolvers,
});

const app = express();
const graphqlEndPoint = '/graphql';

// bodyParser is needed just for POST.
app.use(graphqlEndPoint, bodyParser.json(), graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: graphqlEndPoint }) );

app.listen(8000);