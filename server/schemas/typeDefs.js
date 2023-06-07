const { gql } = require('apollo-server-express');

//! Did not add star rating yet - need to add after testing

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


type movieInput {
    _id: ID
    posterImg: String
    title: String
    releaseDate: String
    description: String
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
    movie: [Movie]
    movies(username: String!): [Movie]
  }

  type Mutation {
    login(username: String!, password: String!): Auth
    addUser(firstname: String!, username: String!,email: String!, password: String!): Auth
    addMovie(username: String!): User
    removeMovie(movieId: ID!): User
}
`;

module.exports = typeDefs;
