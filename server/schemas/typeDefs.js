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
    movieId: ID
    posterImg: String
    title: String
    releaseDate: String
    description: String
    rated: Boolean
    rating: String
    createdAt: Date
}

type movieInput {
  movieId: String
  movieId: ID
    posterImg: String
    title: String
    releaseDate: String
    description: String
    rated: Boolean
    rating: String
    createdAt: Date
}

type Auth {
  token: ID!
  user: User
}

  # Define which queries the front end is allowed to make and what data is returned
  
  
  type Query {
    users: [User]
    movies: [Movie]
  }

  type Mutation {
    adduser (
      firstname: String!
      username: String
      avatar: String
      email: String
    )
    // remove user?
    // login
    // add movie (to watched)
    // remove movie (from watched)
}
`;

module.exports = typeDefs;
