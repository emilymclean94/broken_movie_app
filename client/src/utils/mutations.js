import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        avatar
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        firstname
        username
        avatar
        email
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
  }
`;

export const ADD_MOVIE = gql`
  mutation addMovie($movieId: ID!) {
    addMovie(movieId: $movieId) {
      _id
      posterImg
      title
      releaseDate
      description
      rated
    }
  }
`;

