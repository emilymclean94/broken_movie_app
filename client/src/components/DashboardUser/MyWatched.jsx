import React, { useState } from 'react';
import styled from '@emotion/styled';
import Avatar4 from '../Assets/AvatarImages/Avatar4.png';
const API_IMG = 'https://image.tmdb.org/t/p/w500/';

const MyWatched = (id) => {
  const [MyWatchedList, setMyWatchedList] = useState([]);

  const handleAddMyWatched = ({ id,title,poster_path}) => {
      const newMyWatched = 

    <MyWatchedContainer key={MyWatchedList.length}>
    <Poster src={API_IMG + poster_path} alt="movie poster" />
        <Title>{title}</Title>
        <MyRaiting>Import Raiting</MyRaiting>
        <DeleteMovieButton>Delete</DeleteMovieButton>
    </MyWatchedContainer>;

    setMyWatchedList((prevMyWatchedList) => [...prevMyWatchedList, newMyWatched]);
  };

  return (
    <div>
<MyWatchedContainer key={MyWatchedList.length}>
    <Poster src={Avatar4} alt="movie poster" />
        <Title>Bobs Burgers</Title>
        <MyRaiting>Import Raiting</MyRaiting>
        <DeleteMovieButton>Delete</DeleteMovieButton>
    </MyWatchedContainer>

    <button onClick={() => handleAddMyWatched(id)}>Rate</button>
    
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
const MyRaiting = styled.p`

`
export default MyWatched;
