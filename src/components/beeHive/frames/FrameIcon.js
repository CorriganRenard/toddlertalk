import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const FrameIcon = ({frame, beeHive, redirectSuper}) => {
    return (



        <div>

            <div className="col-sm-1 card card-block frame"></div>

        </div> /*end row*/

    );
};

FrameIcon.propTypes = {
    frame: PropTypes.object.isRequired
};

export default FrameIcon;
