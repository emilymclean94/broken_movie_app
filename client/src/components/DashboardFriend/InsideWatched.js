import React, { useState } from 'react';
import styled from '@emotion/styled';
import AddToMyToWatch from '../DashboardUser/AddToMyWatch';

const AddToWatched = () => {
  const [watchedList, setWatchedList] = useState([]);

  const handleAddWatched = ({id, title, poster_path}) => {
    const newWatched = <WatchedContainer key={watchedList.length}>
                          <WatchedPosterstyle={{ width: '14rem' }} src={API_IMG + poster_path} alt="movie poster" />
                          <WatchedTitle>{title}</WatchedTitle>
                          <WatchedRating>Watched Rating</WatchedRating>
                          <AddToMyToWatch/>
                      </WatchedContainer>;
    setWatchedList((prevWatchedList) => [...prevWatchedList, newWatched]);
  };

  return (
    <div>
      <button onClick={handleAddWatched}>Add to Watched</button>
    </div>
  );
};
const WatchedContainer = styled.div`

`
const WatchedPoster = styled.img`
`
const WatchedTitle = styled.h3`
`
const WatchedRating = styled.p`
`
export default AddToWatched;




