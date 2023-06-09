import { gql } from '@apollo/client';

//! Removed avatar from user queries

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      firstname
      username
      email
      genre
      bio
      friends
      myList {
        _id
        posterImg
        title
        releaseDate
        description
      }
      watched {
        _id
        posterImg
        title
        releaseDate
        description
        rating
      }
    }
  }
`;

export const QUERY_ME = gql`
query me {
 me {
    _id
    firstname
    username
    email
    genre
    bio
    friends {
      _id
      username
      firstname
      email
    }
    myList {
      _id
      posterImg
      title
      releaseDate
      description
    }
    watched {
      _id
      posterImg
      title
      releaseDate
      description
      rating
    }
  }
}
`;

export const QUERY_MOVIES = gql`
  query getMovies {
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