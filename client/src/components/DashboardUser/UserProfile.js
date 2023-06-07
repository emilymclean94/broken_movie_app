import React from 'react';
import { Navigate, useParams } from 'react-router';
import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../../utils/queries';
import avatar from '../Assets/AvatarImages/Avatar2.png';
import { Grid, Box } from '@mui/material/';
import Auth from '../../utils/auth';



const UserProfile = () => {
    const { username: userParam } = useParams();
  
    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
      variables: { username: userParam },
    });
  
    const user = data?.me || data?.user || {};
    // navigate to personal profile page if username is yours
    if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
      return <Navigate to="/user" />;
    }
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (!user?.username) {
      return (
        <h4>
          You need to be logged in to see this. Use the navigation links above to
          sign up or log in!
        </h4>
      );
    }


    return (
        <Box sx={{ flexGrow: 1 }}>
                <Grid container border={3}>
                    <Grid  xs={3} >
                        <img src={avatar} alt='user avatar' width='200px' height='200px'></img>
                    </Grid>
                    <Grid item xs={3}>
                        <p>Username generated here</p>
                        <p>Favorite Genre here</p>
                    </Grid>
                </Grid>
            </Box>
    )
}
export default UserProfile;