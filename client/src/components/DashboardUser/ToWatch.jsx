// import React from 'react';
// import styled from '@emotion/styled';
// // import Rating from '@mui/material/Rating';
// // import Box from '@mui/material/Box';
// // import StarIcon from '@mui/icons-material/Star';
// const API_IMG = 'https://image.tmdb.org/t/p/w500/';

// const ToWatch = ({ title, poster_path, id }) => {
// //  return and map over the div you created
// //  pull information from data base
// //onclick function that stores your rating into the data base(add ratings to database) the labels are the values i want to pull and store also for the watched div so please include those <3

// return (
//     <div>
//     {searchResults.map((result) => (
//   <MovieContainer key={myMovieList.length}>
//         <MoviePoster src={API_IMG + poster_path} alt="movie poster" />
//         <MovieTitle>{title}</MovieTitle>
//         {/* <Rating
//             name="hover-feedback"
//             value={rating}
//             precision={0.5}
//             getLabelText={getLabelText}
//             onChange={(event, newValue) => {
//             setValue(newValue);
//             //enable my button when new value is greater than 0
//             }}
//         onChangeActive={(event, newHover) => {
//             setHover(newHover);
//             }}
//         emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
//         />
//           {value !== null && (
//             <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
//           )} */}
        
// <button onClick={handleAddMyWatched(id)}>Rate</button>
//       </MovieContainer>
//       ))}
//  </div> );
// };


// const MovieContainer = styled.div``;
// const MoviePoster = styled.img`
// height: 24rem;
// width: 14rem;`;
// const MovieTitle = styled.h3``;


// export default ToWatch;