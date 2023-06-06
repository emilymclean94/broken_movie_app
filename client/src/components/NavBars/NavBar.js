import React from 'react';
import logo from '../../../Assets/Icons/logo.png';
import FriendsModal from '../ModalsPages/FriendsModal';

const NavBar = () => {
    return (
        <div> this is the nav bar we will use everywhere but the home page
            <nav>
                <img src={logo} alt="logo" />
                <h1>StreamVerse</h1>
                <ul>
                    <li>Profile</li>
                    <li>Feed</li>
                    <li><FriendsModal/></li>
                    <li>Sign Out</li>
                </ul>
            </nav>
            
        </div>

    )
}
export default NavBar;