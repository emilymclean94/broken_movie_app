import React from "react";
import Hero from "../components/HomePages/Hero";
import Footer from "../components/NavBars/Footer";
import HomeNavBar from "../components/NavBars/HomeNavBar";
import Carousel from "../components/HomePages/Carousel";
import Scroll1 from "../components/HomePages/Scroll1";
import AboutUs from "../components/HomePages/AboutUs";
import Scroll2 from "../components/HomePages/Scroll2";

const Home = () => {
    return (
        <div>
        <HomeNavBar />
        <Hero />
        <Scroll1 />
        <Carousel />
        <Scroll2 />
        <AboutUs />
        <Footer />
        </div>
    );
    }