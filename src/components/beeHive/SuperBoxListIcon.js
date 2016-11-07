import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const SuperBoxListIcon = ({superBox, beeHive, redirectSuper}) => {
  return (



    <div className="row">
      <div className="col-sm-4">
        <div className="card card-block">
          <h4> {superBox.title}</h4>
          <h6 className="card-subtitle text-muted">{superBox.title}</h6>



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
                 <div className="col-sm-1 card card-block frame"></div>
                 <div className="col-sm-1 card card-block frame"></div>
                 <div className="col-sm-1 card card-block frame"></div>
                 <div className="col-sm-1 card card-block frame"></div>
                 <div className="col-sm-1 card card-block frame"></div>
                 <div className="col-sm-1 card card-block frame"></div>
                 <div className="col-sm-1 card card-block frame"></div>
                 <div className="col-sm-1 card card-block frame"></div>
                 <div className="col-sm-1 card card-block frame"></div>
                 <div className="col-sm-1 card card-block frame"></div>
                 <div className="col-sm-1 card card-block frame"></div>
                 <div className="col-sm-1 card card-block frame"></div>
             </div>
            {/* <div className="row">
                 <div className="col-sm-3 card card-block"></div>
                 <div className="col-sm-3 card card-block"></div>
                 <div className="col-sm-3 card card-block"></div>
                 <div className="col-sm-3 card card-block"></div>
             </div>
             <div className="row">
                 <div className="col-sm-3 card card-block"></div>
                 <div className="col-sm-3 card card-block"></div>
                 <div className="col-sm-3 card card-block"></div>
                 <div className="col-sm-3 card card-block"></div>
             </div>*/}


        </div>

    </div> /*end row*/

  );
};

SuperBoxListIcon.propTypes = {
  superBox: PropTypes.object.isRequired
};

export default SuperBoxListIcon;
