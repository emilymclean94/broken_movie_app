import React from 'react';
import Fade from 'react-reveal/Fade';
import './Home.css';
import styled from '@emotion/styled'

const Scroll1 = () => {
    return (
        <div className="fade">
            <Fade right effectOut="fadeOutTop">
            <h1 className="one">A Movie</h1>
            </Fade>
            <Fade  left effectOut="fadeOutTop">  
            <h1>Lover's Community</h1>
            </Fade>
            <Fade right effectOut="fadeOutTop">  
            <h1>Track your Movies</h1>
            </Fade>
            <Fade  left effectOut="fadeOutTop">
            <h1>Rate them</h1>
            </Fade> 
            <Fade right effectOut="fadeOutTop">  
            <h1>and Find Friends!</h1>
            </Fade>
            <Fade  left effectOut="fadeOutTop">
            <SignUpButton href='#navbar'className="last">Sign Up!!</SignUpButton>
            </Fade>
            <div class="custom-shape-divider-top-1686412855">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
        </div>
    )
}
const SignUpButton = styled.button`
display: inline-block;
outline: none;
margin: 0;
padding: 0;
vertical-align: middle;
cursor: pointer;
font-size: 20px;
border-radius: 500px;
transition-property: background-color,border-color,color,box-shadow,filter;
transition-duration: .3s;
border: 1px solid transparent;
min-width: 160px;
text-transform: uppercase;
white-space: normal;
text-align: center;
height: 48px;
line-height: 48px;
:hover{
    transform: scale(1.04);
    background-color: #0077ff;
    color: #fff;
}
font-weight: bold;
color: #1e0876;
background-color: #fff;
`
export default Scroll1;