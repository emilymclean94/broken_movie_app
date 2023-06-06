const { gql } = require('apollo-server-express');

const typeDefs = gql`
  # Define which fields are accessible from the model

  type User {
    firstname: String
    username: String
    avatar: String
    email: String
    myList:[Movie]
    watched: [Movie]
    friends: [User]
  }

  type Movie {
    posterImg: String
    title: String
    releaseDate: String
    description: String
    adult: Boolean
    rating: String
    createdAt: Date
}

  # Define which queries the front end is allowed to make and what data is returned
  
  type Query {
    users: [User]
  }
`;

module.exports = typeDefs;
