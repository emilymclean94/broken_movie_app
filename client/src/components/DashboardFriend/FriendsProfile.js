import React from 'react';
import avatar from '../Assets/AvatarImages/Avatar1.png';
import { Grid, Box } from '@mui/material';


const FriendsProfile = () => {
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
export default FriendsProfile;