import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const SuperBoxFrames = ({superBox}) => {
  return (



    <div className="col-sm-4">

      <div className="card card-block">
        <h4> {superBox.title}</h4>
        <h6 className="card-subtitle text-muted">{superBox.superBoxType}</h6>

        {/*   <img height="50" alt="superBox image" src={require('../home/' + superBox.superBoxType + '.png')} />*/}

        <p>Number of frames: {superBox.numframes}</p>
        <Link to={'/hivedata/' + superBox.id} className="card-link">Modify superBox</Link>
      </div>
    </div>

  );
};

SuperBoxFrames.propTypes = {
  superBox: PropTypes.object.isRequired
};

export default SuperBoxFrames;
