import React from 'react';
import styled from '@emotion/styled';


const FriendsToWatch = ({id, poster_path, title}) => {
//button onclick that takes you to the search page??@ashley
//maybe also pull info from the title div and shows movie?? idk i def wanna hear your thought process of the queries
  return (
    <div> 
      {searchResults.map((result) => (
           <MovieContainer key={movieList.length}>
          <MoviePoster style={{ width: '14rem' }} src={API_IMG + poster_path} alt="movie poster" />
          <MovieTitle>{title}</MovieTitle>
          <button onClick={handleAddMovie}>find movie? search movie? add to list?</button>
          </MovieContainer>
          ))}
    </div>
  );
};

const MovieContainer = styled.div`

`
const MoviePoster = styled.img`
height: 24rem;
width: 14rem;
`

const MovieTitle = styled.h3`

`

export default FriendsToWatch;




