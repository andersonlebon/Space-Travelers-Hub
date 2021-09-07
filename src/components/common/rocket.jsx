import React from 'react';
import Proptypes from 'prop-types';

const Rocket = (props) => {
  const { rocket } = props;
  return (
    <li className="card">
      <div className="card-img">
        <img src={rocket.flickr_images} alt="Rocket img" />
      </div>
      <div className="card-body">
        <h2 className="title">{rocket.rocket_name}</h2>
        <p>{rocket.description}</p>
        <button type="button">Reseve</button>
      </div>
    </li>
  );
};

Rocket.propTypes = {
  rocket: Proptypes.shape({
    description: Proptypes.string,
    rocket_name: Proptypes.string,
    flickr_images: Proptypes.string,
  }).isRequired,
};
export default Rocket;
