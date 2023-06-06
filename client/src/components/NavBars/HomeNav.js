import React from 'react';

const HomeNav = () => {
    return (
        <div>This is where our home nav is created
            <nav>
                <img src={logo} alt="logo" />
                <h1>StreamVerse</h1>
                <ul>
                    <li><Login /></li>
                    <li><SignUp /></li>
                </ul>
            </nav>
        </div>
    )
}
export default HomeNav;