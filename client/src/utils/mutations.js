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
      }
    }
  }
`;

export const ADD_MOVIE = gql`
  mutation addMovie($posterImg: String, $title: String, $releaseDate: String, $description: String, $rated: Boolean, $rating: String, $updatedAt: String) {
    addMovie(posterImg: $posterImg, title: $title, releaseDate: $releaseDate, description: $description, rated: $rated, rating: $rating, updatedAt: $updatedAt) {
      _id
      posterImg
      title
      releaseDate
      description
      rated
      rating
      updatedAt
    }
  }
`;

