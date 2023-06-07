import React from 'react';
import NavBar from '../components/NavBars/NavBar'
import FriendsProfile from '../components/DashboardFriend/FriendsProfile';
import FriendsToWatch from '../components/DashboardFriend/FriendsToWatch';
import FriendsWatchedList from '../components/DashboardFriend/FriendsWatchedList';
import Footer from '../components/NavBars/Footer';



const FriendDashboard = () => {
    return (
        <div>
            <NavBar />

            <div>
                <h1>Testing friends dashboard</h1>
            </div>
            

            <FriendsProfile />
            <FriendsToWatch />
            <FriendsWatchedList />
            <Footer />
        </div>
    );
};

export default FriendDashboard;