import * as React from 'react';
import { AppBar, spacing, Toolbar, Typography, Container, } from "@mui/material";
import styled from '@emotion/styled';
import head from '../Assets/images/head.png';
import LogIn from '../ModalsPages/LoginModal'
import SignUp from '../ModalsPages/SignUpModal'
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
    <AppBar style={{ background: 'black' }} position="static">
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
            STREAMVERSE
          </Typography>
            <Typography >
  <HomeItem sx={{textAlign: 'right', fontFamily: 'Chakra Petch, sans-serif',
              fontWeight: 200,
              color: 'white',p: 3,
            display: { xs: 'none'}}}
              ><SignUp/></HomeItem> 
              </Typography>
              <Typography >       
  <HomeItem edge="end" xs={{textAlign: 'right', display: {xs:'none', md: 'flex', }, p: 3, fontFamily: 'Chakra Petch, sans-serif',
              fontWeight: 200,
              color: 'white',}}><LogIn/></HomeItem>
              </Typography>
        </Toolbar>
      </Container>
    </AppBar>

  );
}
export default HomeNav;