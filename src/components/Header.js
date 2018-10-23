import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/registration'>Registration</Link></li>
          </ul>
        </header>
      </div>
    );
  }
}

export default Header;