import React, {PropTypes} from 'react';
import SuperBoxListIcon from './SuperBoxListIcon';
import SuperBoxFrames from './SuperBoxFrames';


const SuperBoxList = ({superBoxes, beeHive, redirectSuper}) => {
  return (




      <div className="row">

      {superBoxes.map(superBox =>

          <SuperBoxListIcon key={superBox.id} superBox={superBox} beeHive={beeHive} redirectSuper={redirectSuper}/>

      )}
{/*
      {superBoxes.map(superBox =>

          <SuperBoxFrames key={superBox.id} superBox={superBox}/>
      )}*/}
    </div>

  );
};

SuperBoxList.propTypes = {
  superBoxes: PropTypes.object.isRequired
};

export default SuperBoxList;
