import React from 'react';
import Proptypes from 'prop-types';

const Profile = ({ rockets, missions }) => {
  const getReseveredItems = (store) => store.filter((element) => element.reserved === true);
  return (
    <section className="Profile">
      <div className="missions-profile">
        <h2 className="profile-title">My Missions</h2>
        <ul className="list-group">
          {getReseveredItems(missions).map((element) => (
            <li className="list-group-item profile-li" key={element.mission_name}>{element.mission_name}</li>
          ))}
        </ul>
      </div>
      <div className="rockets-profile">
        <h2 className="profile-title">My Rockets</h2>
        <ul className="list-group">
          {getReseveredItems(rockets).map((element) => (
            <li className="list-group-item profile-li" key={element.rocket_name}>{element.rocket_name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

Profile.propTypes = {
  missions: Proptypes.arrayOf(Proptypes.shape({})).isRequired,
  rockets: Proptypes.arrayOf(Proptypes.shape({})).isRequired,
};
export default Profile;
