import React from 'react';
import styled from '@emotion/styled'
import { Grid } from '@mui/material';
import blue from '../Assets/images/blue.gif';


const IMG = styled.img`
 height: 80vh;
 padding: 0 0 0 3em;
`
const Container = styled.div`
background-color: #000000;
`

const Title = styled.h1`
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Chakra+Petch:ital@1&family=Fjalla+One&display=swap');
font-family: 'Bebas Neue', sans-serif;
text-align: right;
font-size: 5.8rem;
color: white;
padding: 0 3.7rem 0 0;
margin: 0;
`
const SubTitle = styled.h3`
text-align: right;
width: 89vh;
font-size: 2rem;
color: #808080;
padding: 2em 2em 0 0;
margin: 0;
align-items: right;
`
const Hero = () => {


    return (
<Container >
<Grid container rowSpacing ={2} columnSpacing={10}>
    <Grid item container xs={6}>
    <IMG src={blue} className="col" alt="cool" />
    </Grid>
    <Grid row item xs={1} sm={3}>
    <SubTitle >INTO THE</SubTitle>
    <Title >STREAMVERSE</Title>
    </Grid>
    </Grid>
</Container>
    );
}
export default Hero;