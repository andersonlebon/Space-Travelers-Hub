/* eslint-disable react/prop-types */
import React from 'react';
import Rocket from './common/rocket';

const Rockets = ({ store }) => (
  <section className="rocket-section">
    <ul className="d-flex flex-column justify-content-center">
      {store.map((rocket) => (
        <Rocket key={rocket.id} rocket={rocket} />
      ))}
    </ul>
  </section>
);

export default Rockets;
