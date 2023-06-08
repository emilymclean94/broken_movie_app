import React from 'react';
import { Navigate, useParams } from 'react-router';
import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../../utils/queries';
import avatar from '../Assets/AvatarImages/Avatar2.png';
import Auth from '../../utils/auth';
import { Avatar } from '@mui/material';
import styled from '@emotion/styled';



const UserProfile = () => {
    // const { username } = useParams();
  
    // const { loading, data } = useQuery(username ? QUERY_USER : QUERY_ME, {
      // variables: { username: username },
    // });
  
    // const user = data?.me || data?.user || {};
    // // navigate to personal profile page if username is yours
    // if (Auth.loggedIn() && Auth.getProfile().data.username === username) {
    //   return <Navigate to="/user" />;
    // }
    // if (loading) {
    //   return <div>Loading...</div>;
    // }
  
    // if (!user?.username) {
    //   return (
    //     <h4>
    //       You need to be logged in to see this. Use the navigation links above to
    //       sign up or log in!
    //     </h4>
    //   );
    // }


    return (
      <>
        {Auth.loggedIn() ? (<Box sx={{ flexGrow: 1 }}>
                <Grid container border={3}>
                    <Grid  xs={3} >
                        <img src={avatar} alt='user avatar' width='200px' height='200px'></img>
                    </Grid>
                    <Grid item xs={3}>
                        <p>Username generated here</p>
                        <p>Favorite Genre here</p>
                        <button onClick={()=> Auth.logout()}>Log Out</button>
                    </Grid>
                </Grid>
            </Box>) : (
                  <h4>
                    You need to be logged in to see this. Use the navigation links above to
                    sign up or log in!
                  </h4>)}</>
    )
}
export default UserProfile;

// return(
// <CardCoontainer>
//     <Avatar  sx={{ width: 200, height: 200 }}>
//     <img src={avatar} alt='user avatar' width='200px' height='200px'/>
//     </Avatar>
//         <DetailsContainer>
//             <Username>Generate Info</Username>
//             <FavoriteGenre>Generate Info</FavoriteGenre>
//             <Bio>generate info</Bio>
//             <UpdateProfile>Update Profile</UpdateProfile>
//         </DetailsContainer>
// </CardCoontainer>
//     )

// const CardCoontainer = styled.div`
// display: flex;
//   align-items: center;
//   background-color: #f5f5f5;
//   padding: 16px;
//   border-radius: 8px;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//   margin: auto;
//   width: 80vw;
// `
// const DetailsContainer = styled.div`
// display: flex;
// flex-direction: column;
// margin-left: 20px;
// `

// const Username = styled.h4`
// font-size: 24px;
// font-weight: bold;
// `
// const FavoriteGenre = styled.h5`
// font-size: 16px;
// `
// const Bio = styled.p`
// font-size: 16px;
// `
// const UpdateProfile = styled.button`
// display: inline-block;
// outline: none;
// cursor: pointer;
// font-size: 14px;
// line-height: 1;
// border-radius: 500px;
// transition-property: background-color,border-color,color,box-shadow,filter;
// transition-duration: .3s;
// border: 1px solid transparent;
// min-width: 160px;
// text-transform: uppercase;
// white-space: normal;
// text-align: center;
// height: 48px;
// :hover{
//     transform: scale(1.04);
//     background-color: #1e0876;
// }
// font-weight: bold;
// color: white;
// background-color: #0077ff;
// `
