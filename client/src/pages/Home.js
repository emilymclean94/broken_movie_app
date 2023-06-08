import React from "react";
import Hero from "../components/HomePages/Hero";
import HomeNav from "../components/NavBars/HomeNav";
import Scroll1 from "../components/HomePages/Scroll1";
import Carousel from "../components/HomePages/Carousel";
import AboutUs from "../components/HomePages/AboutUs";
import Footer from "../components/NavBars/Footer";
// import Login from "../components/ModalsPages/LoginModal";

const Home = () => {
    return (
        <div>
        <HomeNav />
        <Hero />
        <Scroll1 />
        {/* <Carousel /> */}
        <AboutUs />
        <Footer />
        </div>
    );
    }

    export default Home;