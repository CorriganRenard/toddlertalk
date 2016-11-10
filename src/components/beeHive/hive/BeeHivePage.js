import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as beeHiveActions from '../../../actions/beeHiveActions';
import BeeHiveList from './BeeHiveList';

import {browserHistory} from 'react-router';


class BeeHivePage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.redirectToAddBeeHivePage = this.redirectToAddBeeHivePage.bind(this);
  }

/*  beeHiveList(beeHive, index) {
    return <div key={index}>{beeHive.title}</div>;
  }*/

  redirectToAddBeeHivePage()  {
    browserHistory.push('/beeHive');
  }

  render() {
    const {beeHives} = this.props;

    return(
      <div className="container" id="yard">
        <h1>My Bee Yard</h1>

        <input type="submit"
               value="Add Hive"
               className="btn btn-primary"
               onClick={this.redirectToAddBeeHivePage}/>
        <hr className="half-rule" />

       <BeeHiveList beeHives={beeHives} />

      </div>
    );
  }
}

BeeHivePage.propTypes = {
  beeHives: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
  return {
    beeHives: state.beeHives
  };
}

function mapDispatchToProps(dispatch){

  return {
 actions: bindActionCreators(beeHiveActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BeeHivePage);
