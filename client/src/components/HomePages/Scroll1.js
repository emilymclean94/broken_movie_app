import React from 'react';
import Fade from 'react-reveal/Fade';
import './Home.css';

const Scroll1 = () => {
    return (
        <div ClassName="fade">
            <Fade delay={2000} top effectOut="fadeOutTop">
            <h1 >Love Movies?</h1>
            </Fade>
            <Fade delay={4000} top effectOut="fadeOutTop">
            <h1>Love Raiting Them?</h1>
            </Fade>
            <Fade delay={6000} top effectOut="fadeOutTop">
            <h1 >Love Making Friends?</h1>
            </Fade>
            <Fade delay={8000} top effectOut="fadeOutTop">
            <h1>Sign Up Today!</h1>
            </Fade>
        </div>
    )
}
export default Scroll1;