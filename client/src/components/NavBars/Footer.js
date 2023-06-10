import React from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import { BsGithub } from 'react-icons/bs';


export const Footer= () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "#1e0876",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="black" variant="h5">
              StreamVerse
            </Typography>
          </Grid>
          <Grid marginTop={1} item xs={20} textAlign="center">
            <Button label="clickable" color="white"variant="subtitle1" onClick={() => window.location.href = "http://github.com/Ashleyg5"}>
              {<BsGithub fontSize={18} />}
              </Button>
              <Button label="clickable" color="white" variant="subtitle1" onClick={() => window.location.href = "http://github.com/emilymclean94"}>
              {<BsGithub fontSize={18}/>}
              </Button>
              <Button label="clickable" color="white" variant="subtitle1" onClick={() => window.location.href = "http://github.com/sweetkloid"}>
              {<BsGithub fontSize={18}/>}
              </Button>
              <Button label="clickable" color="white" variant="subtitle1" onClick={() => window.location.href = "http://github.com/EGARRISXN"}>
              {<BsGithub fontSize={18}/>}
              </Button>
              <Button label="clickable" color="white" variant="subtitle1" onClick={() => window.location.href = "http://github.com/keelyybug"}>
              {<BsGithub fontSize={18}/>}
              </Button>
              <Typography marginTop={2} color="textSecondary" variant="subtitle1" fontSize={10}>
              {`© ${new Date().getFullYear()} Caffeine Coders. All rights reserved.`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;