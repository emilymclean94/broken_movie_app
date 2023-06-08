const fetch = require('node-fetch');

const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYjhjOWU2NTViNTUwYzgyMDY0MmQyNjNlODdhZjIwNyIsInN1YiI6IjY0N2UyZjc1Y2Y0YjhiMDE0MTkwNTg5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E1i43E5tNzWFzFiYyIleOPSAVqstkbaq23O_ma5YnYY'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));