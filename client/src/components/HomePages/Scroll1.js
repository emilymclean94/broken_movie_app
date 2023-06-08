import React from 'react';
import Fade from 'react-reveal/Fade';
import './Home.css';
import scroll1 from '../Assets/Icons/1.png';
import scroll2 from '../Assets/Icons/2.png';
import scroll3 from '../Assets/Icons/3.png';
import scroll4 from '../Assets/Icons/4.png';


const Scroll1 = () => {
    return (
        <div>
        <div ClassName="fade">
            <div styled={{ backgroundImage: `url('3.png')`}}>
            <h1 className="one">Love Movies?</h1>
            </div>
            <Fade  left effectOut="fadeOutTop">
            <div styled={{backgroundImage: `url(${scroll2})`}}>    
            <h1>Love Raiting Them?</h1>
            </div>
            </Fade>
            <Fade right effectOut="fadeOutTop">
            <div styled={{backgroundImage: `url(${scroll3})`}} >    
            <h1 >Love Making Friends?</h1>
            </div>
            </Fade>
            <Fade  left effectOut="fadeOutTop">
            <div styled={{backgroundImage: `url(${scroll4})`}}>    
            <h1 >Sign Up Today!</h1>
            </div>
            </Fade> 
        </div>
        </div>
    )
}
export default Scroll1;