import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const BeeHiveListIcon = ({beeHive}) => {
  return (



    <div className="col-sm-4">

      <div className="card">
        <div className="card-block">
          <h4 className="card-title"> {beeHive.title}</h4>
          <h6 className="card-subtitle text-muted">{beeHive.hiveTypeId}</h6>
        </div>
        <img height="200" alt="Card image cap" src={require('../../home/' + beeHive.hiveTypeId + '.png')} />
        <div className="card-block">

              <p>Date Created: {beeHive.birthdate}</p>
              <p>Number of supers: {beeHive.numsupers}</p>
            <Link to={'/hivedata/' + beeHive.id} className="card-link">Hive Overview</Link>
          </div>
      </div>
      </div>

  );
};

BeeHiveListIcon.propTypes = {
  beeHive: PropTypes.object.isRequired
};

export default BeeHiveListIcon;
