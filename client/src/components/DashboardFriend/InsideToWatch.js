import React, { useState } from 'react';
import styled from '@emotion/styled';

const AddToWatch = () => {
  const [movieList, setMovieList] = useState([]);

  const handleAddMovie = () => {
    const newMovie = 
<MovieContainer key={movieList.length}>
    <MoviePoster>movie poster</MoviePoster>
      <MovieTitle>movie title</MovieTitle>
    <MovieDescription>movie description</MovieDescription>
</MovieContainer>;
    setMovieList((prevMovieList) => [...prevMovieList, newMovie]);
  };

  return (
    <div>
      <div>make fake ones for fake friends profile?</div>
      <button onClick={handleAddMovie}>Add to List</button>
      {movieList}
    </div>
  );
};
const MovieContainer = styled.div`

`
const MoviePoster = styled.img`
`
const MovieTitle = styled.h3`
`
const MovieDescription = styled.p`
`
export default AddToWatch;




