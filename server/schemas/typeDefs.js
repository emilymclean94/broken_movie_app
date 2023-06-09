const { gql } = require('apollo-server-express');

//! Did not add star rating yet - need to add after testing
//! Took avatar out of user and create user mutation

const typeDefs = gql`
  # Define which fields are accessible from the model

  type User {
    _id: ID
    firstname: String
    username: String
    avatar: String
    email: String
    genre: String
    bio: String
    myList:[Movie]
    watched: [Movie]
    friends: [User]
  }

  type Movie {
    _id: ID
    posterImg: String
    title: String
    releaseDate: String
    description: String
    rating: String
    createdAt: String
}

type Auth {
  token: ID!
  user: User
}

  # Define which queries the front end is allowed to make and what data is returned
  
  type Query {
    users: [User]
    user(username: String!): User
    movie: [Movie]
    movies(username: String!): [Movie]
    me: User
  }

  type Mutation {
    login(username: String!, password: String!): Auth
    addUser(firstname: String!, username: String!,email: String!, password: String!, genre: String, bio: String): Auth
    addMovie(username: String!): Movie
    removeMovie(movieId: ID!): User
}
`;

module.exports = typeDefs;
