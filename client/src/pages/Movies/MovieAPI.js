import React, { useState, useEffect } from "react";
import "./MovieAPI.css";
import MovieBox from "./MovieBox";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';



const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=bb8c9e655b550c820642d263e87af207";

const apiKey = "bb8c9e655b550c820642d263e87af207";

function MovieAPI() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  const searchMovie = async (e) => {
    e.preventDefault();
    console.log("Searching");
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setMovies(data.results);
    } catch (e) {
      console.log(e);
    }
  };

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Container maxWidth="lg">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              MovieDb App
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Trending
            </Typography>
            <div style={{ flexGrow: 1 }}></div>
            <form onSubmit={searchMovie} autoComplete="off">
              <div style={{ display: "flex" }}>
                <InputBase
                  placeholder="Movie Search"
                  name="query"
                  value={query}
                  onChange={changeHandler}
                  sx={{ mr: 1 }}
                />
                <Button type="submit" variant="contained" color="primary" startIcon={<SearchIcon />}>
                  Search
                </Button>
              </div>
            </form>
          </Container>
        </Toolbar>
      </AppBar>
      <div>
        {movies.length > 0 ? (
          <div className="container">
            <div className="grid">
              {movies.map((movieReq) => (
                <MovieBox key={movieReq.id} {...movieReq} />
              ))}
            </div>
          </div>
        ) : (
          <h2>Sorry!! No Movies Found</h2>
        )}
      </div>
    </>
  );
}

export default MovieAPI;