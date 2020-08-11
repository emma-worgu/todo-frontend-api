import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <div className = 'navbar'>
        <h3>Logo</h3>
        <ul className = 'navLinks'>
          <Link to = '/'>
            <li>Register</li>
          </Link>
          <Link to = '/login'>
            <li>Login</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Nav;