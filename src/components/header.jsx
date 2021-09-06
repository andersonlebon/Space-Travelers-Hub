import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/planet.svg';
import store from '../redux/configurestore';

const Header = () => {
  store.dispatch({ type: 'getRockets', payload: [1, 2, 2] });

  return (
    <header className="header">
      <div className="log">
        <img src={logo} alt=" logo" />
        <h1>Space travelers&apos; Hub</h1>
      </div>
      <nav className="nabar">
        <ul>
          <li>
            <NavLink to="/">Rocket</NavLink>
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
};

export default Header;
