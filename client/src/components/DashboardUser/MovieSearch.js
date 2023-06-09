// import React, { useState, useEffect } from 'react';
// import Auth from '../../utils/auth';
// import { useMutation } from "@apollo/client";
// import { ADD_MOVIE } from '../../utils/mutations';
// import { searchTMDB } from '../../'
// import { saveMovieIds, getSavedMovieIds } from '../../utils/localStorage';

// const SearchMovies = () => {

// //! Below export was in a separate API.js in the utils folder for making an api query -- not sure if this is how we need to do it but it's an idea
// // export const searchGoogleBooks = (query) => {
// //     return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
// //   };

// //! Refactored from google books homework/github example 
//     // create state for holding returned api data
//     const [searchedMovies, setSearchedMovies] = useState([]);

//     // create state for holding our search field data
//     const [searchInput, setSearchInput] = useState('');

//     // create state to hold saved movieId values
//     const [savedMovieIds, setSavedMovieIds] = useState(getSavedMovieIds());

//     const [saveMovie] = useMutation(ADD_MOVIE);

//     useEffect(() => {
//         return () => saveMovieIds(savedMovieIds);
//       });
    
//       // create method to search for movies and set state on form submit
//       const handleFormSubmit = async (event) => {
//         event.preventDefault();
    
//         if (!searchInput) {
//           return false;
//         }
    
//         try {
//     //! Change to search TMDB & bring in search tmdb 
//           const response = await searchGooglemovies(searchInput);
    
//           if (!response.ok) {
//             throw new Error("something went wrong!");
//           }
    
//           const { items } = await response.json();
    
//     //! Double check this map function (DATA MIXED WITH GOOGLE BOOK STUFF) - is this mapping over the api data we pulled?
//           const movieData = items.map((movie) => ({
//             movieId: movie.id,
//             posterImg: movie.imageLinks?.thumbnail || "",
//             title: movie.title,
//             description: movie.volumeInfo.description,
//             releaseDate: movie.releaseDate,
//           }));
    
//           setSearchedMovies(movieData);
//           setSearchInput("");
//         } catch (err) {
//           console.error(err);
//         }
//       };
    
//       // create function to handle saving a movie to our database
//       const handleSaveMovie = async (movieId) => {
//         // find the movie in `searchedmovies` state by the matching id
//         const movieToSave = searchedMovies.find((movie) => movie.movieId === movieId);
    
//         try {
//           await saveMovie({ variables: { input: movieToSave } });
    
//           // if movie successfully saves to user's account, save movie id to state
//           setSavedMovieIds([...savedMovieIds, movieToSave.movieId]);
//         } catch (err) {
//           console.error(err);
//         }
//       };
// //! Refactor ends here


//     return (
//         <form onSubmit={ } className="flex flex-col">
//             <input type="text" placeholder="Search" value={searchTerm} onChange={ } className="px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
//             {suggestions.length > 0 && (
//                 <div className="">
//                     {suggestions.map((suggestion) => (
//                         <button key={suggestion.id} className="px-4 py-2 text-left hover:bg-gray-100 focus:outline-none" onClick={() => { }}>
//                             {suggestion.title}
//                         </button>
//                     ))}
//                 </div>
//             )}
//             <button type="submit" className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
//                 Search
//             </button>
//         </form>
//     );
// };

// export default SearchMovies;
