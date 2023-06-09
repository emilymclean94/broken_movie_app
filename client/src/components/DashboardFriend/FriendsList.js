import React from 'react';
import movieList from './InsideToWatch';
import watchedList from './InsideWatched';


const FriendsToWatch = () => {
      return (
    <div>
      <h1>To Watch</h1>
        <FriendsToWatchContainer>
          {movieList}
        </FriendsToWatchContainer>
      <h1>Watched</h1>
        <FriendsWatchedContainer>
        {watchedList}
        </FriendsWatchedContainer>
    </div>
      );
    };
    const FriendsToWatchContainer = styled.div`

    `
    const FriendsWatchedContainer = styled.div`
    `

export default FriendsToWatch;