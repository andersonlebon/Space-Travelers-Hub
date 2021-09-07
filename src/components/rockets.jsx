/* eslint-disable react/prop-types */
import React from 'react';
import Rocket from './common/rocket';

const Rockets = ({ store }) => (
  <section className="tocket">
    {store.map((rocket) => (
      <Rocket key={rocket.id} rocket={rocket} />
    ))}
  </section>
);

export default Rockets;
