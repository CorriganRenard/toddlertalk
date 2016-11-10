import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import SuperBoxFramesList from './SuperBoxFramesList.js';

const SuperBoxListIcon = ({superBox, beeHive, redirectSuper}) => {
  return (



    <div className="row">
      <div className="col-sm-4">
        <div className="card card-block">
          <h4> </h4>
          <h6 className="card-subtitle text-muted">{}</h6>



          <p>Number of frames: </p>
            <input type="submit"
                   value="Modify Super"
                   className="btn btn-primary overview-buttons"
                   onClick={redirectSuper}
            />
        </div> {/*end card-block*/}
      </div>{/*end col*/}
        <div className="col-sm-4">

             <div className="row">
                 <SuperBoxFramesList frames={superBox.frames} />

             </div>

        </div>

    </div> /*end row*/

  );
};

SuperBoxListIcon.propTypes = {
  superBox: PropTypes.object.isRequired
};

export default SuperBoxListIcon;
