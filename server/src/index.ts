import { createServer } from '@graphql-yoga/node';

const port = Number(process.env.GRAPHQL_PORT) || 4000;

const server = createServer({
	port,
});

server.start().then(() => {
	console.log(`🚀 GraphQL Server ready at http://localhost:${port}/graphql`);
});
