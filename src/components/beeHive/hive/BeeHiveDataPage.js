import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import * as beeHiveActions from '../../../actions/beeHiveActions';
import SuperBoxList from '../supers/SuperBoxList';
import DataPageHeader from './DataPageHeader';
import HiveLid from './HiveLid';

class BeeHiveDataPage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      beeHive: Object.assign({}, this.props.beeHive),
      errors: {}
    };

    this.redirectToModifyBeeHivePage = this.redirectToModifyBeeHivePage.bind(this);
    this.redirectToModifySuperPage = this.redirectToModifySuperPage.bind(this);
    this.redirectToAddSuperPage = this.redirectToAddSuperPage.bind(this);
    this.deleteBeeHive = this.deleteBeeHive.bind(this);

  }

  beeHiveList(beeHive, index) {
    return <div key={index}>{beeHive.title}</div>;
  }

  redirectToModifyBeeHivePage(){

    const beeHive = this.state.beeHive;

    browserHistory.push('/beeHive/' + beeHive.id);
  }

  redirectToAddSuperPage(){

      const beeHive = this.state.beeHive;
    browserHistory.push('/hivedata/'+ beeHive.id +'/superbox' );
  }

  redirectToModifySuperPage(event){
    event.preventDefault();
    const beeHive = this.state.beeHive;
    const superBox = event.target;
    browserHistory.push('/hivedata/'+ beeHive.id +'/superbox' + superBox.id );
  }

  saveSuperBox(event) {
    event.preventDefault();
    this.props.actions.saveSuperBox(this.state.beeHive)
        .then(() => this.redirect());
  }

  saveBeeHive(event) {
    event.preventDefault();
    this.props.actions.saveBeeHive(this.state.beeHive)
      .then(() => this.redirect());
  }


  deleteBeeHive(event){
    let result = prompt('Type "delete" to delete this hive?');
    if(result.toLowerCase()=='delete') {

      event.preventDefault();
      this.props.actions.deleteBeeHive(this.state.beeHive.id)
      .then(browserHistory.push('/beeHives/'));
    }
  }

  render() {



    return(
      <div className="container" id="data-page">

      <DataPageHeader
        redirect={this.redirectToModifyBeeHivePage}
        addsuper={this.redirectToAddSuperPage}
       />

       <HiveLid />

       <SuperBoxList
          beeHive={this.props.beeHive}
          superBoxes={this.props.beeHive.supers}
       />

      </div>
    );
  }

}

BeeHiveDataPage.propTypes = {
  //myProp: PropTypes.string.isRequired,

  beeHive: PropTypes.object.isRequired,
  superBoxes: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};
function getBeeHiveById(beeHives, id) {
  const beeHive = beeHives.filter(beeHive => beeHive.id == id);
  if (beeHive.length) return beeHive[0];
  return null;

}

function mapStateToProps(state, ownProps){

  const beeHiveId = ownProps.params.id;


   let beeHive = getBeeHiveById(state.beeHives, beeHiveId);

  return {
    beeHive: beeHive,
    beeHives: state.beeHives
  };
}

function mapDispatchToProps(dispatch){

  return {
    actions: bindActionCreators({beeHiveActions}, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BeeHiveDataPage);
