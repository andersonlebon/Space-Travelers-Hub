import React from 'react';
import Proptypes from 'prop-types';

const Rocket = (props) => {
  const { rocket } = props;
  return <div className="card">{rocket.description}</div>;
};

Rocket.propTypes = {
  rocket: Proptypes.shape({ description: Proptypes.string }).isRequired,
};
export default Rocket;
