import { useEffect } from 'react';
import Proptypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { getMissions, getMissionsFromApi } from '../redux/mission/mission';
import Mission from './common/mission';

const Missions = ({ store }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (store.length === 0) {
      getMissionsFromApi(dispatch, getMissions);
    }
  }, []);

  return (
    <section id="mission" className="mission">
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th scope="col">Mission</th>
            <th scope="col">Description</th>
            <th scope="col">Status</th>
            <th scope="col" />
          </tr>
        </thead>
        <tbody>
          {store.map((mission) => (
            <Mission key={mission.id + 'm'} mission={mission} />
          ))}
        </tbody>
      </table>
    </section>
  );
};

Missions.propTypes = {
  store: Proptypes.arrayOf(Proptypes.shape({})).isRequired,
};

export default Missions;
