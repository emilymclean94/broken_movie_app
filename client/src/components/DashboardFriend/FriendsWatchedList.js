import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

//TODO small div with two columns?
//TODO movie, stars, and date rated from user
//TODO movie poster generated from api?

//TODO function to generate a new instance of the component when movie is added to list

const FriendsWatchedList = () => {
    return (
        <div>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                <h4>Friend's Watched List</h4>

                <ul>
                    <li>movie and image</li>
                </ul>
                </CardContent>
            </Card>
        </div>
    )
}
export default FriendsWatchedList;