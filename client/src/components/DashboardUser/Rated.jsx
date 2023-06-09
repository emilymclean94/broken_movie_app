import React from 'react';
import styled from '@emotion/styled';
const API_IMG = 'https://image.tmdb.org/t/p/w500/';

const Rated = ({id, title, poster_path}) => {
//delete button function
// function that pulls rating value from database to input into value

  return (
    <div>
      {searchResults.map((result) => (
        <MyWatchedContainer key={MyWatchedList.length}>
          <Poster src={API_IMG + poster_path} alt="movie poster" />
          <Title>{title}</Title>
          <Rating name="read-only" value={value} readOnly />
          <DeleteMovieButton>Delete</DeleteMovieButton>
        </MyWatchedContainer>
    ))}
    </div>
  );
};

const DeleteMovieButton = styled.button`

`
const MyWatchedContainer = styled.div`

`
const Poster = styled.img`
height: 24rem;
width: 14rem;
`
const Title = styled.h3`

`
export default Rated;

