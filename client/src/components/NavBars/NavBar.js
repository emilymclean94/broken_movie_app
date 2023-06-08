import * as React from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Container, Button } from "@mui/material";
import styled from '@emotion/styled';
import head from '../Assets/images/head.png';
import Auth from '../../utils/auth';

const Icon = styled.img`
    width: 2rem;
    `;

const pages = ['Home', 'Feed', 'My Dashboard', 'Friends', 'Logout'];


function NavBar() {

  return (
    <AppBar style={{ background: '#0077ff' }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Icon src={head} alt="icon" />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Chakra Petch, sans-serif',
              fontWeight: 200,
              color: 'white',
              textDecoration: 'none',
            }}
          >
            StreamVerse
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                onClick={() => window.location.assign('/')}
                sx={{ my: 2, color: 'white', display: 'block' }}
              > 
                Home
              </Button>
              <Button
                onClick={() => window.location.assign('/feed')}
                sx={{ my: 2, color: 'white', display: 'block' }}
              > 
                Feed
              </Button>
              <Button
                onClick={() => window.location.assign('/mydashboard')}
                sx={{ my: 2, color: 'white', display: 'block' }}
              > 
                My Dashboard
              </Button>
              <Button
                onClick={() => window.location.assign('/yourdashboard')}
                sx={{ my: 2, color: 'white', display: 'block' }}
              > 
                Friends
              </Button>
              <Button
                onClick={() => Auth.logout()}
                sx={{ my: 2, color: 'white', display: 'block' }}
              > 
                Logout
              </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;