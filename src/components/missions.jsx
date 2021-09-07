import React from 'react';
import Mission from './common/mission'

const Missions = () => (
  <section id="mission" className="mission">
    <table className="table table-bordered table-striped">
      <thead>
        <tr>
          <th scope="col">Mission</th>
          <th scope="col">Description</th>
          <th scope="col">Status</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <Mission />
        <Mission />
        <Mission />
      </tbody>
    </table>
  </section>
);
export default Missions;
