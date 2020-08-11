const {
  ApolloServer,
} = require('apollo-server');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

const config = require('./config');
const resolvers = require('./graphQL/resolvers');

const {
  User,
  Post,
} = require('./models');

const PORT = config.server.PORT || 4000;

const typeDefsFilePath = path.join(__dirname, 'graphQL', 'typeDefs.gql');
const typeDefs = fs.readFileSync(typeDefsFilePath, 'utf-8');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    User,
    Post,
  },
});

mongoose.connect(config.db.MONGO_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}).then(() => {
  console.info('Successfully connnected to the database');
  server.listen(PORT).then(({
    url,
  }) => {
    console.info(`The server is listening on ${url}`);
  });
}).catch((err) => {
  console.error(`Unable to connect to the database ${err}`);
});
