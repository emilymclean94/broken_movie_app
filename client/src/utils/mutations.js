import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        email
        username
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
        email
      }
    }
  }
`;

export const ADD_MOVIE = gql`
  mutation addMovie($posterImg: String, $title: String, $releaseDate: String, $description: String, $rating: String, $updatedAt: String) {
    addMovie(posterImg: $posterImg, title: $title, releaseDate: $releaseDate, description: $description, rating: $rating, updatedAt: $updatedAt) {
      _id
      posterImg
      title
      releaseDate
      description
      rating
      updatedAt
    }
  }
`;

