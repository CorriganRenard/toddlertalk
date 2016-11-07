import React, {PropTypes} from 'react';
import BeeHiveListIcon from './BeeHiveListIcon';


const BeeHiveList = ({beeHives}) => {
  return (
    <div className="row">
      {beeHives.map(beeHive =>

          <BeeHiveListIcon key={beeHive.id} beeHive={beeHive}/>


      )}
      </div>
  );
};

BeeHiveList.propTypes = {
  beeHives: PropTypes.array.isRequired
};

export default BeeHiveList;
