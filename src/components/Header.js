import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Header = ({loggedIn, handleLogout}) =>  {
  const renderIfLoggedIn = (element) => {
    if (loggedIn) {
      return element;
    }
    return (
      <div>
        <header>
          <ul>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/auth'>Register</Link></li>
          </ul>
        </header>
      </div>
    );
  }
  return (
    <div> 
      {
        renderIfLoggedIn(
          <div>
            <header>
              <ul>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/mypage'>My page</Link></li>
                <li><Link to='/login' onClick={() => handleLogout()}>Logout</Link></li>
              </ul>
            </header>
          </div>
        )
      } 
    </div>
  )
}

export default Header;