import React from 'react';
// import NavBar from '../components/NavBars/NavBar'
import FriendsProfile from '../components/DashboardFriend/FriendsProfile';
import FriendsList from '../components/DashboardFriend/FriendsList';
import Footer from '../components/NavBars/Footer';



const FriendDashboard = () => {
    return (
        <div>
            {/* <NavBar /> */}

            <div>
                <h1>Testing friends dashboard</h1>
            </div>
            

            <FriendsProfile />
            <FriendsList />
            <Footer />
        </div>
    );
};

export default FriendDashboard;