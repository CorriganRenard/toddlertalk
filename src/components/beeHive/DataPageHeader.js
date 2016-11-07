import React, {PropTypes} from 'react';



const DataPageHeader = ({redirect, addsuper}) => {
  return (


<div>
  <h1>Hive Overview</h1>

  <input type="submit"
         value="Add Super"
         className="btn btn-primary overview-buttons"
         onClick={addsuper}
  />
  <input type="submit"
         value="Modify Hive"
         className="btn btn-primary overview-buttons"
         onClick={redirect}
  />
  <input type="submit"
         value="Delete Hive"
         className="btn btn-danger overview-buttons"

  />
  <hr className="half-rule" />
</div>
  );
};

DataPageHeader.propTypes = {

};

export default DataPageHeader;
