import React from 'react';
import styled from '@emotion/styled';
import AddToMyWatch from './AddToMyWatch';
import MyWatchedList from './Watched';


const MyWatchLists = () => {
    return (
<div>    
    <DashBoardTitles>To Watch</DashBoardTitles>
    <MyToWatchContainer>
            <AddToMyWatch />
    </MyToWatchContainer>

    <DashBoardTitles>Rated</DashBoardTitles>
    <MyWatchedContainer>
            {MyWatchedList}
    </MyWatchedContainer>


</div>
      );
    };
    const MyWatchedContainer = styled.My`
    `
    const MyToWatchContainer = styled.div`
    `
    const DashBoardTitles = styled.h6`
    `
export default MyWatchLists;