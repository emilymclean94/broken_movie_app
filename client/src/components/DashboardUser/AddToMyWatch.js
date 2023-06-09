import React, { useState } from 'react';
import styled from '@emotion/styled';
import Rate from './Watched';
const API_IMG = 'https://image.tmdb.org/t/p/w500/';

const AddToMyToWatch = ({ title, poster_path, id }) => {
  const [movieList, setMovieList] = useState([]);

  const handleAddMovie = (event, id) => {
    const newMovie = (
      <MovieContainer key={movieList.length}><MoviePoster style={{ width: '14rem' }} src={API_IMG + poster_path} alt="movie" />
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

  const handleViewList = () => {
    // Navigate to MyDashboard where the list is displayed
  };

  return (
    <div>
      <button onClick={handleAddMovie(id)}>Add to List</button>
      <button onClick={handleViewList}>View List</button>
    </div>
  );
};

const MovieContainer = styled.div``;
const MoviePoster = styled.img``;
const MovieTitle = styled.h3``;


export default AddToMyToWatch;


