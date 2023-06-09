import React, { useState } from 'react';
import AddToWatch from './InsideToWatch';
const API_IMG = 'https://image.tmdb.org/t/p/w500/';


const FriendsToWatch = () => {
      return (
    <div>
        <FriendsToWatchContainer>
          <h1>To Watch</h1>
          <AddToWatched />
        </FriendsToWatchContainer>

        <FriendsWatchedContainer>
          <h1>Watched</h1>
        </FriendsWatchedContainer>
    </div>
      );
    };
    const FriendsToWatchContainer = styled.div`

    `
    const FriendsWatchedContainer = styled.div`
    `

export default FriendsToWatch;