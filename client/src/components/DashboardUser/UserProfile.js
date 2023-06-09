import React from 'react';
import { Navigate, useParams } from 'react-router';
import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../../utils/queries';
import avatar from '../Assets/AvatarImages/Avatar2.png';
import Auth from '../../utils/auth';
import { Avatar } from '@mui/material';
import styled from '@emotion/styled';
import { Box, Grid } from '@mui/material';



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