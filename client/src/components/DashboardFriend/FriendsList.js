import React from 'react';
import FriendsToWatch from './FriendsToWatch';
import FriendsWatched from './FriendsWatched';


const FriendsList = () => {
      return (
    <FriendsListsContainer>
      <FriendsMoviesContainer>
        <Title>To Watch</Title>
        <FriendsToWatch/>
      </FriendsMoviesContainer>

      <FriendsMoviesContainer>
        <Title>Watched</Title>
        <FriendsWatched/>
      </FriendsMoviesContainer>
    </FriendsListsContainer>
      );
    };
    const FriendsMoviesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-bottom: 20px;
    `
    const FriendsListsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    `
    const Title = styled.h6`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
    `
export default FriendsList;