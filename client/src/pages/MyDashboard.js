import React from 'react';
import SearchBar from '../components/DashboardUser/MovieSearch';
import SearchResults from '../components/DashboardUser/MovieResults';
import NavBar from '../components/NavBars/NavBar';
import UserProfile from '../components/DashboardUser/UserProfile';
import MyWatchedList from '../components/DashboardUser/MyWatchedList';
import MyToWatch from '../components/DashboardUser/MyToWatch';
 

const MyDashboard = () => {
return (
<div>
    <h1>Testing dashboard</h1>
<NavBar />
<UserProfile/>
<SearchBar />
<SearchResults />
<MyToWatch />
<MyWatchedList />
</div>
);
};

export default MyDashboard;