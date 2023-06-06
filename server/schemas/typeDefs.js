const { gql } = require('apollo-server-express');

//! Did not add star rating yet - need to add after testing

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
    movieId: ID
    posterImg: String
    title: String
    releaseDate: String
    description: String
    rated: Boolean
    rating: String
    createdAt: String
}

  type movieInput {
    movieId: ID
    posterImg: String
    title: String
    releaseDate: String
    description: String
    rated: Boolean
    rating: String
    updatedAt: String
}

type Auth {
  token: ID!
  user: User
}

  # Define which queries the front end is allowed to make and what data is returned
  
  type Query {
    users: [User]
    user(username: String!): User
    movie(movieId: ID!): Movie
    movies(username: String!): [Movie]
  }

  type Mutation {
    login(username: String!, password: String!): Auth
    addUser(firstname: String!, username: String!, avatar: String!,email: String!): Auth
    removeMovie(movieId: ID!): User
}
`;

module.exports = typeDefs;
