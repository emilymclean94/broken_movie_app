import React from 'react';
import styled from '@emotion/styled';
import ToWatch from './AddToMyWatch';
import MyWatched from './MyWatched';

const MyWatchedContainer = styled.div`
  /* Your styles for MyWatchedContainer */
`;

const MyToWatchContainer = styled.div`
  /* Your styles for MyToWatchContainer */
`;

const DashBoardTitles = styled.h6`
  /* Your styles for DashBoardTitles */
`;


const MyList = () => {
  return (
    <div>    
      <DashBoardTitles>To Watch</DashBoardTitles>
      <MyToWatchContainer>
        <ToWatch /> {/* Render myMovieList as a component */}
      </MyToWatchContainer>

      <DashBoardTitles>Rated</DashBoardTitles>
      <MyWatchedContainer>
        <MyWatched /> {/* Render MyWatchedList as a component */}
      </MyWatchedContainer>
    </div>
  );
};

export default MyList;
