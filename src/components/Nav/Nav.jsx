import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <>
      <center>
        <div className="nav">
          <Link to="/home">
            <img src="./practice-w-react-logo.png" alt="Practice W/ React" width="50%" height="50%" style={{ maxWidth: 1100, }} />
          </Link>
        </div>
      </center>
      <center>
      <div className="linkDiv">
        {/* If no user is logged in, show these links */}
        {user.id === null &&
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        }

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <Link className="navLink" to="/user">
              Home
            </Link>

            <Link className="navLink" to="/info">
              Info
            </Link>

            <LogOutButton className="navLink" />
          </>
        )}

        <Link className="navLink" to="/about">
          About
        </Link>

      </div>
      </center>
      <br/> <br/>
    </>
  );
}

export default Nav;
