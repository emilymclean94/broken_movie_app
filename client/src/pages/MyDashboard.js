import React from 'react';
import NavBar from '../components/NavBars/NavBar';
import Footer from '../components/NavBars/Footer';
import UserProfile from '../components/DashboardUser/UserProfile';
// import SearchBar from '../components/DashboardUser/MovieSearch';
// import SearchResults from '../components/DashboardUser/MovieResults';
import Rate from '../components/DashboardUser/AddToMyWatch';
import MyWatchedList from '../components/DashboardUser/Watched';

const MyDashboard = () => {
   
    return (
        <>
            <NavBar/>
            <UserProfile/>
            {/* <SearchBar />
            <SearchResults /> */}
            {/* <Rate />
            <MyWatchedList /> */}
            <Footer />
        </>
    );
};

export default MyDashboard;