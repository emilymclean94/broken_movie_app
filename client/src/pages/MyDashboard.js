import React from 'react';
import NavBar from '../components/NavBars/NavBar';
import Footer from '../components/NavBars/Footer';
import UserProfile from '../components/DashboardUser/UserProfile';
// import SearchBar from '../components/DashboardUser/MovieSearch';
// import SearchResults from '../components/DashboardUser/MovieResults';
import MyLists from '../components/DashboardUser/MyLists';

const MyDashboard = () => {
   
    return (
        <>
            <NavBar/>
            <UserProfile/>
            {/* <SearchBar />
            <SearchResults /> */}
            <MyLists/>
            <Footer />
        </>
    );
};

export default MyDashboard;