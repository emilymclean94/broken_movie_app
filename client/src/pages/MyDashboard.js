import React from 'react';
import NavBar from '../components/NavBars/NavBar';
import UserProfile from '../components/DashboardUser/UserProfile';
// import SearchBar from '../components/DashboardUser/MovieSearch';
// import SearchResults from '../components/DashboardUser/MovieResults';
import MyToWatch from '../components/DashboardUser/MyToWatch';
import MyWatchedList from '../components/DashboardUser/MyWatchedList';
 

const MyDashboard = () => {
    return (
        <div>
            <h1>Testing dashboard</h1>
            <NavBar />
            <UserProfile/>
            {/* <SearchBar />
            <SearchResults /> */}
            <MyToWatch />
            <MyWatchedList />
        </div>
    );
};

export default MyDashboard;