import React from 'react';
import Fade from 'react-reveal/Fade';
import './Home.css';

const Scroll1 = () => {
    return (
        <div>
        <div ClassName="fade">
            <h1 >Love Movies?</h1>
            <Fade left effectOut="fadeOutTop">
            <h1>Love Raiting Them?</h1>
            </Fade>
            <Fade right effectOut="fadeOutTop">
            <h1 >Love Making Friends?</h1>
            </Fade>
            <Fade left effectOut="fadeOutTop">
            <h1>Sign Up Today!</h1>
            </Fade>
        </div>
        </div>
    )
}
export default Scroll1;