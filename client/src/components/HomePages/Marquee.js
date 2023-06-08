import React from 'react';
import './Home.css';
import styled from '@emotion/styled'
import review1 from './homeimages/review1.png';
import review2 from './homeimages/review2.png';
import review3 from './homeimages/review3.png';
import review4 from './homeimages/review4.png';
import review5 from './homeimages/review5.png';


const Marquee = () => {
    return (
        <MarqueeContainer>
                <IMG src={review1} alt="first review"/>
                <IMG src={review2} alt="second review"/>
                <IMG src={review3} alt="second review"/>
                <IMG src={review4} alt="second review"/>
                <IMG src={review5} alt="second review"/>
        </MarqueeContainer>
    )
}
const MarqueeContainer = styled.div`
display:flex;
flex-direction: row;
justify-content: center;
align-items: center;
overflow: hidden;
height: 25rem;
gap: 1rem;
`
const IMG = styled.img`
-moz-animation: marquee 10s linear infinite;
-webkit-animation: marquee 10s linear infinite;
animation: marquee 10s linear infinite;
@keyframes marquee {
    0% {
        transform: translateX(100);
    }
    100% {
        transform: translateX(-100%);
    }}
    @-webkit-keyframes marquee {
        0% {
          transform: translateX(100%);
        }
        100% {
          transform: translateX(-100%);
        }
      }
      @keyframes marquee {
        0% {
          -moz-transform: translateX(100%);
          -webkit-transform: translateX(100%);
          transform: translateX(100%)
        }
        100% {
          -moz-transform: translateX(-100%);
          -webkit-transform: translateX(-100%);
          transform: translateX(-100%);
        }
      }
    `
export default Marquee;