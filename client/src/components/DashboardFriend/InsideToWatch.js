import React, { useState } from 'react';
import styled from '@emotion/styled';
import AddToMyToWatch from '../DashboardUser/AddToMyWatch';

const AddToWatch = ( id ) => {
  const [movieList, setMovieList] = useState([]);

  const handleAddMovie = ({id, title, poster_path}) => {
    const newMovie = 
      <MovieContainer key={movieList.length}>
          <MoviePoster style={{ width: '14rem' }} src={API_IMG + poster_path} alt="movie poster" />
          <MovieTitle>{title}</MovieTitle>
          <AddToMyToWatch/>
      </MovieContainer>;
    setMovieList((prevMovieList) => [...prevMovieList, newMovie]);
  };

  return (
    <div>
      <div>make fake ones for fake friends profile?</div>
      <button onClick={handleAddMovie}>Add to List</button>
    </div>
  );
};

const MovieContainer = styled.div`

`
const MoviePoster = styled.img`

`

const MovieTitle = styled.h3`

`

export default AddToWatch;




