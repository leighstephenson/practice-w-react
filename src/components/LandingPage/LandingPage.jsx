import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';
import { Typography } from '@mui/material';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';
import LoginForm from '../LoginForm/LoginForm';

function LandingPage() {
  const history = useHistory();

  const onRegister = (event) => {
    history.push('/registration');
  };

  return (
    <>
      <center>
        <Typography variant="h3" className='openingMessage' 
        sx={{fontWeight: 'bold',}}> WELCOME! </Typography>

        <Typography>
          This is a place to practice code.

          I have not yet decided what to do here. Currently working on adding and 
          displaying notes. 
        </Typography>
        <br /> <br />

        <LoginForm />

        <h5> New Account? </h5>
        <button className="btn btn_sizeSm" onClick={onRegister}>
          Register 
        </button>
      </center>
    </>
  );
}

export default LandingPage;
