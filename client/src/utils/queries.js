import { gql } from '@apollo/client';

//! if error add movieId to model instead of just typeDefs

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      firstname
      username
      email
      avatar
      friends
      myList {
        _id
        posterImg
        title
        releaseDate
        description
        rated
      }
      watched {
        _id
        posterImg
        title
        releaseDate
        description
        rated
        rating
      }
    }
  }
`;

export const QUERY_MOVIES = gql`
  query getMovie {
    movie {
        _id
        posterImg
        title
        releaseDate
        description
        rated
    }
  }
`;

export const QUERY_SINGLE_MOVIE = gql`
  query getSingleMovie($movieId: ID!) {
    movie(movieId: $movieId) {
        _id
        posterImg
        title
        releaseDate
        description
        rated
    }
  }
`;