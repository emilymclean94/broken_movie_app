import React from 'react';
import Fade from 'react-reveal/Fade';
import './Home.css';
import scroll1 from '../Assets/Icons/1.png';
import scroll2 from '../Assets/Icons/2.png';
import scroll3 from '../Assets/Icons/3.png';
import scroll4 from '../Assets/Icons/4.png';
import styled from '@emotion/styled'

const IMG = styled.img`
height: 75vh;
width: 50vh;
`

const ScrollContainer = styled.div`
display: flex;
`

const Scroll1 = () => {
    return (
        <ScrollContainer>
        <div ClassName="fade">
            <IMG src={scroll1} alt="scroll1">
            <h1 className="one">Love Movies?</h1>
            </IMG>
            <Fade  left effectOut="fadeOutTop">
            <IMG src={scroll2} alt="scroll2">    
            <h1>Love Raiting Them?</h1>
            </IMG>
            </Fade>
            <Fade right effectOut="fadeOutTop">
            <IMG src={scroll3} alt='scroll3'>    
            <h1 >Love Making Friends?</h1>
            </IMG>
            </Fade>
            <Fade  left effectOut="fadeOutTop">
            <IMG src={scroll4} alt="scroll3">    
            <h1 >Sign Up Today!</h1>
            </IMG>
            </Fade> 
        </div>
        </ScrollContainer>
    )
}
export default Scroll1;