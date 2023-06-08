import React from "react";
import Hero from "../components/HomePages/Hero";
import HomeNav from "../components/NavBars/HomeNav";
import Scroll1 from "../components/HomePages/Scroll1";
import Marquee from "../components/HomePages/Marquee";
import AboutUs from "../components/HomePages/AboutUs";
import Footer from "../components/NavBars/Footer";
// import Login from "../components/ModalsPages/LoginModal";

const Home = () => {
    return (
        <div>
        <HomeNav />
        <Hero />
        <Scroll1 />
        <Marquee />
        <AboutUs />
        <Footer />
        </div>
    );
    }

    export default Home;