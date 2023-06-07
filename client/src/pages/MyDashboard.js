import React from 'react';
import NavBar from '../components/NavBars/NavBar';
import Footer from '../components/NavBars/Footer';
import UserProfile from '../components/DashboardUser/UserProfile';
// import SearchBar from '../components/DashboardUser/MovieSearch';
// import SearchResults from '../components/DashboardUser/MovieResults';
import MyToWatch from '../components/DashboardUser/MyToWatch';
import MyWatchedList from '../components/DashboardUser/MyWatchedList';
 

const MyDashboard = () => {
    return (
        <div>
            <NavBar />

            <h1>Testing dashboard</h1>
            
            <UserProfile/>
            {/* <SearchBar />
            <SearchResults /> */}
            <MyToWatch />
            <MyWatchedList />

            <Footer />
        </div>
    );
};

export default MyDashboard;