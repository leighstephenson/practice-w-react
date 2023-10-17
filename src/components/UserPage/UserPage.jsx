import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <center>
      <div className="container">

        <Typography variant="h5"> Welcome, {user.username}! </Typography>
        <br />
        <Typography variant="h3" className='openingMessage'> Let's get coding!</Typography>

        <p>Your ID is: {user.id}</p>

        <LogOutButton className="btn" />

      </div>
    </center>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
