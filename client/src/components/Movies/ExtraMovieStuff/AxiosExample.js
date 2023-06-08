const axios = require('axios');

const MovieSearch = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/search/movie?query=string&include_adult=false&language=en-US&page=1',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYjhjOWU2NTViNTUwYzgyMDY0MmQyNjNlODdhZjIwNyIsInN1YiI6IjY0N2UyZjc1Y2Y0YjhiMDE0MTkwNTg5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E1i43E5tNzWFzFiYyIleOPSAVqstkbaq23O_ma5YnYY'
  }
};

axios
  .request(MovieSearch)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });