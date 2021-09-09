import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/planet.svg';

const Header = () => (
  <header className="header">
    <div className="logo">
      <img src={logo} alt=" logo" />
      <h1>Space travelers&apos; Hub</h1>
    </div>
    <nav className="navbar">
      <ul>
        <li>
          <NavLink exact to="/">Rocket</NavLink>
        </li>
        <li>
          <NavLink to="/mission">Mission</NavLink>
        </li>
        <li>
          <NavLink to="/profile">My profile</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
