import React, {PropTypes} from 'react';
import FrameIcon from '../frames/FrameIcon.js';

const SuperBoxFramesList = ({frames}) => {
  return (


        <div>


                {frames.map(frame =>

                    <FrameIcon key={frame.id} />

                )}

            </div>
  );
};

SuperBoxFramesList.propTypes = {
  frames: PropTypes.object.isRequired

};

export default SuperBoxFramesList;
