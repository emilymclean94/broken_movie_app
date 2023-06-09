import React from 'react';
import { useParams } from 'react-router';
import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../../utils/queries';
import avatar from '../Assets/AvatarImages/Avatar2.png';
import Auth from '../../utils/auth';
import { Avatar } from '@mui/material';
import styled from '@emotion/styled';
// import { Box, Grid } from '@mui/material';



const UserProfile = () => {
  const { username: userParam } = useParams();

  const { data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  }); //loading was next to data

  const user = data?.me || data?.user || {};
  // navigate to personal profile page if username is yours


const CardContainer = styled.div`
display: flex;
  align-items: center;
  background-color: #f5f5f5;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: auto;
  width: 80vw;
`
const DetailsContainer = styled.div`
display: flex;
flex-direction: column;
margin-left: 20px;
`

const Username = styled.h4`
font-size: 24px;
font-weight: bold;
`
const FavoriteGenre = styled.h5`
font-size: 16px;
`
const Bio = styled.p`
font-size: 16px;
`
const UpdateProfile = styled.button`
display: inline-block;
outline: none;
cursor: pointer;
font-size: 14px;
line-height: 1;
border-radius: 500px;
transition-property: background-color,border-color,color,box-shadow,filter;
transition-duration: .3s;
border: 1px solid transparent;
min-width: 160px;
text-transform: uppercase;
white-space: normal;
text-align: center;
height: 48px;
:hover{
    transform: scale(1.04);
    background-color: #1e0876;
}
font-weight: bold;
color: white;
background-color: #0077ff;
`


    return (
      <>
        {Auth.loggedIn() ? (<CardContainer>
    <Avatar  sx={{ width: 200, height: 200 }}>
    <img src={avatar} alt='user avatar' width='200px' height='200px'/>
    </Avatar>
        <DetailsContainer>
            <Username>{`${user.username}`}</Username>
            <FavoriteGenre>{`${user.firstname}`}</FavoriteGenre>
            <Bio>generate info</Bio>
            <UpdateProfile>Update Profile</UpdateProfile>
        </DetailsContainer>
</CardContainer>) : (
                  <h4>
                    You need to be logged in to see this. Use the navigation links above to
                    sign up or log in!
                  </h4>)}</>
    )
}
export default UserProfile;
