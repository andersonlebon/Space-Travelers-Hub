import axios from 'axios';
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/planet.svg';
import store from '../redux/configurestore';
import { getRockets, reserveRocket } from '../redux/rockets/rockets';

async function rocs() {
  const { data } = await axios.get('https://api.spacexdata.com/v3/rockets');
  console.log(store.dispatch(getRockets(data)));
  store.dispatch(reserveRocket({ id: 1 }));
}

const Header = () => {
  rocs();

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
