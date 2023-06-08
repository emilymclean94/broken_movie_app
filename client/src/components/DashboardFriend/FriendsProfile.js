import React from 'react';
import avatar from '../Assets/AvatarImages/Avatar1.png';
import { Grid, Box, Avatar } from '@mui/material';
import styled from 'emotion-styled';

const FriendsProfile = () => {
    return (
        // <Box sx={{ flexGrow: 1 }}>
        //          <Grid container border={3}>
        //             <Grid  xs={3} >
        //                 <img src={avatar} alt='user avatar' width='200px' height='200px'></img>
        //             </Grid>
        //             <Grid item xs={3}>
        //                 <p>Username generated here</p>
        //                 <p>Favorite Genre here</p>
        //             </Grid>
        //         </Grid> 
        
        //     </Box>
<CardCoontainer>
    <Avatar  sx={{ width: 200, height: 200 }}>
                put a image tag here and import image
    </Avatar>
        <DetailsContainer>
            <Username>Import Username</Username>
            <FavoriteGenre>Import Favorite Genre</FavoriteGenre>
            <Bio>Import Bio</Bio>
                <ButtonsContainer>
                    <AddFriendButton>Add Friend</AddFriendButton>
                    <RemoveFriendButton>Remove Friend</RemoveFriendButton>
                </ButtonsContainer>
        </DetailsContainer>
</CardCoontainer>
    )
}

const CardCoontainer = styled.div`
display: flex;
  align-items: center;
  background-color: #f5f5f5;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`
const DetailsContainer = styled.div`
display: flex;
flex-direction: column;
`

const Username = styled.h2`
font-size: 24px;
font-weight: bold;
margin-bottom: 8px;
`
const FavoriteGenre = styled.h3`
font-size: 16px;
`
const Bio = styled.p`
font-size: 16px;
`
const AddFriendButton = styled.button`
display: inline-block;
outline: none;
cursor: pointer;
font-size: 14px;
line-height: 1;
border-radius: 500px;
transition-property: background-color,border-color,color,box-shadow,filter;
transition-duration: .3s;
border: 1px solid transparent;
letter-spacing: 2px;
min-width: 160px;
text-transform: uppercase;
white-space: normal;
font-weight: 700;
text-align: center;
padding: 17px 48px;
color: #fff;
background-color: #1ED760;
height: 48px;
:hover{
    transform: scale(1.04);
    background-color: #21e065;
}

font-size: 24px;
font-weight: bold;
color: white;
background-color: #0077ff;
`
const RemoveFriendButton = styled.button`
display: inline-block;
outline: none;
cursor: pointer;
font-size: 14px;
line-height: 1;
border-radius: 500px;
transition-property: background-color,border-color,color,box-shadow,filter;
transition-duration: .3s;
border: 1px solid transparent;
letter-spacing: 2px;
min-width: 160px;
text-transform: uppercase;
white-space: normal;
font-weight: 700;
text-align: center;
padding: 17px 48px;
color: #fff;
background-color: #1ED760;
height: 48px;
:hover{
    transform: scale(1.04);
    background-color: #21e065;
}
font-size: 24px;
font-weight: bold;
background-color: #1e0876;
color: white;
`
const ButtonsContainer = styled.div`
display: flex;
flex-direction: row;
`
export default FriendsProfile;