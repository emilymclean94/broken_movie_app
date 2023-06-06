import React from 'react';
import NavBar from '../components/NavBars/NavBar'
import FriendsProfile from '../components/DashboardFriend/FriendsProfile';
import FriendsToWatch from '../components/DashboardFriend/FriendsToWatch';
import FriendsWatchedList from '../components/DashboardFriend/FriendsWatchedList';
import Footer from '../components/NavBars/Footer';



const FriendDashboard = () => {
    return (
    <div>
        <h1>Testing friends dashboard</h1>
        <NavBar />
        <FriendsProfile/>
        <FriendsToWatch />
        <FriendsWatchedList />
        <Footer />
    </div>
    );
    };
    
    export default FriendDashboard;