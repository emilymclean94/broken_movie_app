import React from 'react';
import avatar from '../Assets/AvatarImages/Avatar1.png';
import { Avatar } from '@mui/material';
import styled from '@emotion/styled';

const FriendsProfile = () => {
    return (
<CardContainer>
    <Avatar  sx={{ width: 200, height: 200 }}>
    <img src={avatar} alt='user avatar' width='200px' height='200px'/>
    </Avatar>
        <DetailsContainer>
            <Username><a>GlitterPokadotQueen</a></Username>
            <FavoriteGenre>Does Dirty Dancing Count As A Genre?</FavoriteGenre>
            <Bio>I brake for birds. I rock a lot of polka dots. I have touched glitter in the past twenty four hours. I spend my entire day talking to children. And I find it fundamentally strange that you’re not a dessert person. That’s just weird and it freaks me out. And I’m sorry I don’t talk like Murphy Brown and I hate your pantsuit, I wish it had ribbons on it or something to make it just slightly cuter. And that doesn’t mean I’m not smart and tough and strong. And I know you like Nick, I’m not trying to interfere, but if you’d just talk to him about it… I’m almost done. I’m about to go and pay this eight hundred dollar fine, and my checks have baby farm animals on them, bitch.
                <br/>
                ~Jess, New Girl </Bio>
                <ButtonsContainer>
                    <AddFriendButton>Add Friend</AddFriendButton>
                    <RemoveFriendButton>Remove Friend</RemoveFriendButton>
                </ButtonsContainer>
        </DetailsContainer>
</CardContainer>
    )
}

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
min-width: 160px;
text-transform: uppercase;
white-space: normal;
text-align: center;
padding: 17px 48px;
background-color: #1ED760;
height: 48px;
:hover{
    transform: scale(1.04);
    background-color: #000000;
}
font-weight: bold;
background-color: #4a4a4a;
color: white;
`
const ButtonsContainer = styled.div`
display: flex;
flex-direction: row;
`

export default FriendsProfile;