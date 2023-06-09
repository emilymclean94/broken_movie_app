import React, { useState } from 'react';
import styled from '@emotion/styled';

const Rate = (id) => {
  const [MyWatchedList, setMyWatchedList] = useState([]);

  const handleAddMyWatched = (id) => {
      const newMyWatched = 

    <MyWatchedContainer key={MyWatchedList.length}>
    <MyWatchedPoster>poster</MyWatchedPoster>
        <MyWatchedTitle>title</MyWatchedTitle>
        <MyWatchedRaiting>Import Raiting</MyWatchedRaiting>
    </MyWatchedContainer>;

    setMyWatchedList((prevMyWatchedList) => [...prevMyWatchedList, newMyWatched]);
  };

  return (
    <div>
      <button onClick={handleAddMyWatched(id)}>Rate</button>
    </div>
  );
};
const MyWatchedContainer = styled.div`

`
const MyWatchedPoster = styled.img`

`
const MyWatchedTitle = styled.h3`

`
const MyWatchedRaiting = styled.p`

`
export default Rate;
