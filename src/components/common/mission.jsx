import React from 'react';
import Proptypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveMission } from '../../redux/mission/mission';

const Mission = (props) => {
  const { mission } = props;
  const dispatch = useDispatch();
  const handelReserved = (id) => {
    dispatch(reserveMission({ id }));
  };
  return (
    <tr id={mission.id}>
      <th scope="row">{mission.mission_name}</th>
      <td>{mission.description}</td>
      <td>
        <p className={
            mission.reserved ? 'ubadge menber' : 'ubadge'
          }
        >
          {mission.reserved ? 'Active Menber' : 'NOT MENBER'}
        </p>
      </td>
      <td>
        <button
onClick={() => handelReserved(mission.id) }
         className={
            mission.reserved ? 'mission-button exit' : 'mission-button'
          }
        >
          {
            mission.reserved ? 'Leave Mission' : 'Join Mission'
          }
        </button>
      </td>
    </tr>
  );
};

Mission.propTypes = {
  mission: Proptypes.shape({
    description: Proptypes.string,
    mission_id: Proptypes.number,
    mission_name: Proptypes.string,
    reserved: Proptypes.bool,
  }).isRequired,
};
export default Mission;
