import React, { useState } from 'react';
import styled from '@emotion/styled';
import Rate from './Watched';
import Rating from '@mui/material/Rating';


const API_IMG = 'https://image.tmdb.org/t/p/w500/';



const AddToMyToWatch = ({ title, poster_path, id }) => {
  const [myMovieList, setMovieList] = useState([]);

  const handleAddMovie = (event, id) => {
    const newMovie = (
      <MovieContainer key={myMovieList.length}>
        <MoviePoster style={{ width: '14rem' }} src={API_IMG + poster_path} alt="movie poster" />
        <MovieTitle>{title}</MovieTitle>
        <Rating
            name="hover-feedback"
            value={value}
            precision={0.5}
            getLabelText={getLabelText}
            onChange={(event, newValue) => {
            setValue(newValue);
            //enable my button when new value is greater than 0
            }}
        onChangeActive={(event, newHover) => {
            setHover(newHover);
            }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
          {value !== null && (
            <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
          )}
        <Rate />
      </MovieContainer>
    );

    setMovieList((prevMovieList) => [...prevMovieList, newMovie]);
  };


  return (
    <div>
      <button onClick={handleAddMovie(id)}>Add to List</button>
    </div>
  );
};


const MovieContainer = styled.div``;
const MoviePoster = styled.img``;
const MovieTitle = styled.h3``;


export default AddToMyToWatch;


// button to add the movie can be used on both movie lists in friends and on the result movie divs