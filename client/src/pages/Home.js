import React from "react";
import styled from '@emotion/styled';
import Hero from "../components/HomePages/Hero";
import HomeNav from "../components/NavBars/HomeNav";
import Scroll1 from "../components/HomePages/Scroll1";
import Marquee from "../components/HomePages/Marquee";
// import AboutUs from "../components/HomePages/AboutUs";
import Footer from "../components/NavBars/Footer";
// import Login from "../components/ModalsPages/LoginModal";

const ScrollContainer = styled.div`
    overflow-x: hidden;
    overflow-y: auto;
    height: 100vh;
    -webkit-overflow-scrolling: touch; /* Enable smooth scrolling on iOS devices */

    // ! When we want to add scroll bar but cut it when its mobile.
    // @media (max-width: 767px) {
    // /* Hide the scrollbar on mobile */
    // ::-webkit-scrollbar {
    //     display: none;
    // }
    // -ms-overflow-style: none; /* IE and Edge */
    // scrollbar-width: none; /* Firefox */
    // }`

const Home = () => {
    return (
        <ScrollContainer>
            <HomeNav />
            <Hero />
            <Scroll1 />
            <Marquee />
            {/* <AboutUs /> */}
            <Footer />
        </ScrollContainer>
        
    );
}

export default Home;