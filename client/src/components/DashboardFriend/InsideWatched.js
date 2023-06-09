import React, { useState } from 'react';
import styled from '@emotion/styled';

const AddToWatched = () => {
  const [WatchedList, setWatchedList] = useState([]);

  const handleAddWatched = () => {
    const newWatched = <WatchedContainer key={WatchedList.length}>
                          <WatchedPoster>Watched poster</WatchedPoster>
                          <WatchedTitle>Watched title</WatchedTitle>
                          <WatchedRating>Watched Rating</WatchedRating>
                      </WatchedContainer>;
    setWatchedList((prevWatchedList) => [...prevWatchedList, newWatched]);
  };

  return (
    <div>
      <button onClick={handleAddWatched}>Add to Watched</button>
      {movieList}
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




