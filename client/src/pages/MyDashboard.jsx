import React from 'react';
import NavBar from '../components/NavBars/NavBar';
import UserProfile from '../components/DashboardUser/UserProfile';
// import SearchBar from '../components/DashboardUser/MovieSearch';
// import SearchResults from '../components/DashboardUser/MovieResults';
import Rated from '../components/DashboardUser/Rated';
import MyWatched from '../components/DashboardUser/MyWatched';
import Footer from '../components/NavBars/Footer';

const MyDashboard = () => {
   
    return (
        <>
            <NavBar/>
            <UserProfile/>
            {/* <SearchBar />
            <SearchResults /> */}
            <Rated />
            <MyWatched />
            <Footer />
        </>
    );
};

export default MyDashboard;