import React from 'react';
import styled from '@emotion/styled';

const FriendsWatched = () => {
//check notes in friends to watch <3
  return (
    <FW>
      {searchResults.map((result) => (
      <WatchedContainer key={watchedList.length}>
          <WatchedPoster style={{ width: '14rem' }} src={API_IMG + poster_path} alt="movie poster" />
          <WatchedTitle>{title}</WatchedTitle>
          <Rating name="read-only" value={value} readOnly /> 
          <AddButton onClick={handleAddWatched}>will styles after decision</AddButton> 
      </WatchedContainer>
      ))}
    </FW>
  );
};
const FW = styled.div`
width: 200px;
height: 200px;
background-color: lightgray;
margin-left: 10px;
margin-right: 10px;
`

const WatchedContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
margin-bottom: 20px;
`

const WatchedPoster = styled.img`
height: 24rem;
width: 14rem;
`

const WatchedTitle = styled.h3`
margin-top: 10px;
margin-bottom: 5px;
font-weight: bold;
`

const AddButton = styled.button`
display: inline-block;
outline: none;
cursor: pointer;
font-size: 14px;
line-height: 1;
border-radius: 500px;
transition-property: background-color,border-color,color,box-shadow,filter;
transition-duration: .3s;
border: 1px solid transparent;
min-width: 160px;
text-transform: uppercase;
white-space: normal;
text-align: center;
height: 48px;
:hover{
    transform: scale(1.04);
    background-color: #1e0876;
}
font-weight: bold;
color: white;
background-color: #0077ff;
`
export default FriendsWatched;




