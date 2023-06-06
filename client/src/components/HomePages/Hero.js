import React from 'react';
import space from '../../Assets/images/space.mp4';

const Hero = () => {
    return (
        <div>
            <video src={space} className="w-full h-screen object-cover" autoPlay loop muted></video>
        </div>
    );
}
export default Hero;