import React from 'react';
import styled from '@emotion/styled';
import AddToMyToWatch from './AddToMyWatch';
import Rated from './Watched';


const MyWatchLists = () => {
    return (
<div>    
    <DashBoardTitles>To Watch</DashBoardTitles>
    <MyToWatchContainer>
        <AddToMyToWatch/>  
    </MyToWatchContainer>

    <DashBoardTitles>Rated</DashBoardTitles>
    <MyWatchedContainer>
        <Rated/>
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