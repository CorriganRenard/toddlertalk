import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const HiveLid = () => {
    return (


<div className="row">
        <div className="col-sm-4">


                <div className="hive-lid">
                    <img className="img-responsive" width="120%" src={require('../home/hive-roof.png')} />
                    </div>

        </div>
    <div className="col-sm-4">
    <h2>Frames</h2>
    </div>
    </div>

    );
};


export default HiveLid;
