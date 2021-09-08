/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React from 'react';
// import Proptypes from 'prop-types';

const Profile = ({ rockets, missions }) => {
  const getReseveredItems = (store) => store.filter((element) => element.reserved === true);
  return (
    <section className="Profile">
      <div className="misisions-profile">
        <ul>
          {getReseveredItems(missions).map((element) => (
            <li key={element.mission_name}>{element.mission_name}</li>
          ))}
        </ul>
      </div>
      <div className="rockets-profile">
        <ul>
          {getReseveredItems(rockets).map((element) => (
            <li key={element.rocket_name}>{element.rocket_name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

// Profile.propTypes = {
//   missions: Proptypes.shape({}).isRequired,
//   rockets: Proptypes.shape({}).isRequired,
// };
export default Profile;
