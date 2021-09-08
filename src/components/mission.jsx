import React from 'react';

const Mission = () => (
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
        <tr>
          <th scope="row">Thaicom</th>
          <td>
            Conubia. In. Lobortis luctus cum maecenas, consequat tincidunt Nulla
            nunc consequat. Sociosqu torquent eros Eget convallis maecenas.
            Risus aliquam varius hac lobortis. Sodales parturient et justo
            egestas tortor massa litora netus ad massa nibh. Vitae vel Curae;
            dolor tellus semper tincidunt fusce cubilia convallis habitant
            tristique consectetuer tempus, ut platea.
          </td>
          <td>
            <p className="ubadge">NOT A MENBER</p>
          </td>
          <td>
            <button className="mission-button exit">Leave Mission</button>
          </td>
        </tr>
        <tr>
          <th scope="row">Telstar</th>
          <td>
            Commodo sociosqu consectetuer habitant fringilla dui nibh ipsum
            magna magnis. Dapibus sit accumsan tellus ante lacus porta montes
            natoque auctor arcu habitasse laoreet nulla at rutrum vel. Ligula in
            hac nulla orci. Varius. Morbi gravida. Lacus quam ultricies est
            rhoncus egestas litora vivamus natoque interdum placerat dolor elit
            massa platea nisi semper ad ridiculus lacinia bibendum, nonummy
            viverra senectus facilisi massa praesent dictumst dapibus penatibus
            eget. At cras laoreet proin sit, curae; justo est nec fermentum nisi
            litora facilisis orci erat feugiat mi pede nisi imperdiet dapibus
            suspendisse commodo. Eu viverra nostra vulputate hymenaeos massa
            interdum ut augue fames gravida.
          </td>
          <td className="">
            <p className="ubadge menber">Active Menber</p>
          </td>
          <td>
            <button className="mission-button">Join Mission</button>
          </td>
        </tr>
        <tr>
          <th scope="row">IRIDIUM NEXT</th>
          <td>
            Massa sapien dui augue viverra maecenas. Malesuada mi facilisi metus
            blandit imperdiet consequat ultricies. Enim malesuada a mauris non
            erat est. Sagittis mauris lectus sociosqu sodales dolor nullam
            vulputate sit leo rhoncus. Urna nulla habitasse sem penatibus
            elementum vitae velit nibh. Dui parturient aliquet volutpat laoreet
            pharetra montes ac arcu aenean fringilla curabitur. Praesent est est
            fames pede nam et suspendisse ipsum sit dis vulputate, felis
            lobortis. Gravida vel eget id integer pulvinar dolor adipiscing
            arcu. Natoque etiam quam. Purus sagittis mi Euismod. Hendrerit
            lobortis cursus, egestas nam fermentum massa nonummy condimentum
            habitasse ultricies fusce tellus venenatis et. Condimentum
            condimentum.
          </td>
          <td>
            <p className="ubadge">NOT A MENBER</p>
          </td>
          <td>
            <button className="mission-button exit">Leave Mission</button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
);
export default Mission;
