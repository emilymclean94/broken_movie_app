import React from 'react';
import styled from '@emotion/styled';

const FriendsWatched = () => {
//check notes in friends to watch <3
  return (
    <div>
      {searchResults.map((result) => (
      <WatchedContainer key={watchedList.length}>
          <WatchedPoster style={{ width: '14rem' }} src={API_IMG + poster_path} alt="movie poster" />
          <WatchedTitle>{title}</WatchedTitle>
          <Rating name="read-only" value={value} readOnly /> 
          <button onClick={handleAddWatched}>will styles after decision</button> 
      </WatchedContainer>
      ))}
    </div>
  );
};
const WatchedContainer = styled.div`

`
const WatchedPoster = styled.img`
height: 24rem;
width: 14rem;
`
const WatchedTitle = styled.h3`
`
export default FriendsWatched;




