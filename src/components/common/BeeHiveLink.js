import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
//import  from './';

const BeeHiveLink = () => {
    return (
        <div className="hiveLink">
          <Link to={'/beehives'}><div className="hiveLink"><h6>Hives</h6></div></Link>


        </div>
    );
};

BeeHiveLink.propTypes = {
    //loading: PropTypes.bool.isRequired
};

export default BeeHiveLink;
