import * as React from 'react';
import { AppBar, Toolbar, Typography, Container, } from "@mui/material";
import styled from '@emotion/styled';
import head from '../Assets/images/head.png';


const HomeItem = styled.div`
    color: white;
    justify-content: space-between;
`;
const Icon = styled.img`
    width: 2rem;
    `;

// sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}

function HomeNav() {
  return (
    <AppBar style={{ background: 'black' }}position="static">
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
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            StreamVerse
          </Typography>
            <Typography >
<HomeItem>Sign Up</HomeItem>
<HomeItem>Log In</HomeItem>
            </Typography>
        </Toolbar>
      </Container>
    </AppBar>
    
  );
}
export default HomeNav;