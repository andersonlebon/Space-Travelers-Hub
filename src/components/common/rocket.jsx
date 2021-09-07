import React from 'react';
import Proptypes from 'prop-types';

const Rocket = (props) => {
  const { rocket } = props;
  return (
    <li className="rocket d-flex w-100">
      <div className="rocket-img">
        <img
          className="w-100 h-100"
          src={rocket.flickr_images}
          alt="Rocket img"
        />
      </div>
      <div className="rocket-body">
        <h2 className="title">{rocket.rocket_name}</h2>
        <p>
          <span className="badge badge-info">Reserved</span>
          {rocket.description}
        </p>
        <button className="btn btn-primary" type="button">
          Reseve Rocket
        </button>
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
