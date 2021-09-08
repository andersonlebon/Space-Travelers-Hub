import React from 'react';
import Mission from './common/mission';

const Missions = ({ store }) => (
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
        <Mission key={mission.id +"m"} mission={mission} />
      ))}
      </tbody>
    </table>
  </section>
);
export default Missions;