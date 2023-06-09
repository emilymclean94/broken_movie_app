import React from 'react';
import styled from '@emotion/styled';
import ToWatch from './ToWatch';
import Rated from './Rated';


const MyWatchLists = () => {
    return (
        <div> 
            <MyToWatchContainer>   
                <Titles>To Watch</Titles>
                <ToWatch/>  
            </MyToWatchContainer>

            <MyWatchedContainer>
                <Titles>Rated</Titles>
                <Rated/>
            </MyWatchedContainer>
</div>
      );
    };
    const MyWatchedContainer = styled.My`
    `
    const MyToWatchContainer = styled.div`
    `
    const Titles = styled.h6`
    `
export default MyWatchLists;