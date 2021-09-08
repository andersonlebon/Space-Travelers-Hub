import React from 'react';
import Mission from './common/mission';
import { getMissions, getMissionsFromApi } from '../redux/mission/mission';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

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
export default Missions;
