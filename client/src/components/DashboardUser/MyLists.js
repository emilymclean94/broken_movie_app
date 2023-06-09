import React from 'react';
import AddToMyWatched from './Watched';
import AddToMyToWatch from './InsideMyWatch';
const API_IMG = 'https://image.tmdb.org/t/p/w500/';

const MyWatchLists = () => {
    return (
<div>    
    <MyToWatchContainer>
          <DashBoardTitles>To Watch</DashBoardTitles>
            <AddToMyToWatch />
    </MyToWatchContainer>

    <MyWatchedContainer>
        <DashBoardTitles>Rated</DashBoardTitles>

        <DeleteMovie>Delete</DeleteMovie>
    </MyWatchedContainer>


</div>
      );
    };
    const DeleteMovie = styled.button`
    `
    const MyWatchedContainer = styled.My`
    `
    const MyToWatchContainer = styled.div`
    `
    const DashBoardTitles = styled.h6`
    `
export default MyWatchLists;