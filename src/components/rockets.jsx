import React from 'react';
import Rocket from './common/rocket';
import Proptypes from 'prop-types';


const Rockets = ({ store }) => (
  <section className="rocket-section">
    <ul className="d-flex flex-column justify-content-center">
      {store.map((rocket) => (
        <Rocket key={rocket.id} rocket={rocket} />
      ))}
    </ul>
  </section>
);

Rockets.propTypes = {
  store: Proptypes.arrayOf(Proptypes.shape({})).isRequired,
};


export default Rockets;
