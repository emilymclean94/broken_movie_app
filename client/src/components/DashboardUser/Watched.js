import React, { useState } from 'react';
import styled from '@emotion/styled';
import Avatar4 from '../Assets/AvatarImages/Avatar4.png';
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
            <RateContainer>
              <Typography component="legend">(pull stored label if possible)if not i will scratch this label</Typography>
              <Rating name="read-only" value={value} readOnly />
            </RateContainer>
          <DeleteMovieButton>Delete</DeleteMovieButton>
        </MyWatchedContainer>
    ))}
    </div>
  );
};

const RateContainer = styled.div`

`
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
const MyRaiting = styled.p`

`
export default Rated;
