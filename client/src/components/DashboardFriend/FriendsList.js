import React from 'react';
import FriendsToWatch from './FriendsToWatch';
import FriendsWatched from './FriendsWatched';


const FriendsList = () => {
      return (
    <div>
      <FriendsToWatchContainer>
        <h1>To Watch</h1>
        <FriendsToWatch/>
      </FriendsToWatchContainer>

      <FriendsWatchedContainer>
        <h1>Watched</h1>
        <FriendsWatched/>
      </FriendsWatchedContainer>
    </div>
      );
    };
    const FriendsToWatchContainer = styled.div`

    `
    const FriendsWatchedContainer = styled.div`
    `

export default FriendsList;