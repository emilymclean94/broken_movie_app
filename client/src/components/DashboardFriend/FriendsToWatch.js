import React from 'react';
import styled from '@emotion/styled';


const FriendsToWatch = ({id, poster_path, title}) => {
//button onclick that takes you to the search page??@ashley
//maybe also pull info from the title div and shows movie?? idk i def wanna hear your thought process of the queries
  return (
    <FTWC> 
      {searchResults.map((result) => (
           <MovieContainer key={movieList.length}>
          <MoviePoster style={{ width: '14rem' }} src={API_IMG + poster_path} alt="movie poster" />
          <MovieTitle>{title}</MovieTitle>
          <AddButton onClick={handleAddMovie}>find movie? search movie? add to list?</AddButton>
          </MovieContainer>
          ))}
    </FTWC>
  );
};

const FTWC = styled.div`
width: 200px;
height: 200px;
background-color: lightgray;
margin-left: 10px;
margin-right: 10px;
`
const MovieContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
margin-bottom: 20px;
`
const MoviePoster = styled.img`
height: 24rem;
width: 14rem;
`

const MovieTitle = styled.h3`
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


export default FriendsToWatch;




