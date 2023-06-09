export const getSavedMovieIds = () => {
    const savedMovieIds = localStorage.getItem('saved_movie')
      ? JSON.parse(localStorage.getItem('saved_movie'))
      : [];
  
    return savedMovieIds;
  };
  
  export const saveMovieIds = (movieIdArr) => {
    if (movieIdArr.length) {
      localStorage.setItem('saved_movie', JSON.stringify(movieIdArr));
    } else {
      localStorage.removeItem('saved_movie');
    }
  };
  
  export const removeMovieId = (movieId) => {
    const savedMovieIds = localStorage.getItem('saved_movie')
      ? JSON.parse(localStorage.getItem('saved_movie'))
      : null;
  
    if (!savedMovieIds) {
      return false;
    }
  
    const updatedSavedMovieIds = savedMovieIds?.filter((savedMovieId) => savedMovieId !== MovieId);
    localStorage.setItem('saved_movie', JSON.stringify(updatedSavedMovieIds));
  
    return true;
  };
  