import React, {PropTypes} from 'react';
import SuperBoxListIcon from './SuperBoxListIcon';



const SuperBoxList = ({superBoxes, beeHive, redirectSuper}) => {
  return (

    <div className="row">
      {superBoxes.map(superBox =>

          <SuperBoxListIcon key={superBox.id} superBox={superBox} beeHive={beeHive} redirectSuper={redirectSuper}/>

      )}
    </div>

  );
};

SuperBoxList.propTypes = {
  superBoxes: PropTypes.object.isRequired
};

export default SuperBoxList;
