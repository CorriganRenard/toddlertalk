import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as beeHiveActions from '../../actions/beeHiveActions';
import BeeHiveForm from './hive/BeeHiveForm';


class ManageBeeHivePage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      beeHive: Object.assign({}, this.props.beeHive),
      errors: {}
    };
    this.updateBeeHiveState = this.updateBeeHiveState.bind(this);
    this.saveBeeHive = this.saveBeeHive.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if ( this.props.beeHive.id != nextProps.beeHive.id) {
      this.setState({beeHive: Object.assign({}, nextProps.beeHive)});
    }
  }

  updateBeeHiveState(event) {
    const field = event.target.name;
    let beeHive = this.state.beeHive;
    beeHive[field] = event.target.value;
    return this.setState({beeHive: beeHive});
  }

  saveBeeHive(event) {
    event.preventDefault();
    this.props.actions.saveBeeHive(this.state.beeHive)
      .then(() => this.redirect());
  }

  redirect(){
    this.context.router.push('/beeHives');
  }


  render() {
    return(

        <BeeHiveForm
          allHiveTypes={this.props.hiveTypes}
          onChange={this.updateBeeHiveState}
          onSave={this.saveBeeHive}
          beeHive={this.state.beeHive}
          errors={this.state.errors}
        />

    );
  }
}

ManageBeeHivePage.propTypes = {
  beeHive: PropTypes.object.isRequired,
  hiveTypes: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired


};

ManageBeeHivePage.contextTypes = {
  router: PropTypes.object
};

function getBeeHiveById(beeHives, id) {
  const beeHive = beeHives.filter(beeHive => beeHive.id == id);
  if (beeHive.length) return beeHive[0];
  return null;

}

function mapStateToProps(state, ownProps){
  const beeHiveId = ownProps.params.id;
  let beeHive = {id: '', watchHref: '', title: '', hiveTypeId: '', birthdate: '', numsupers: ''};

  if (beeHiveId && state.beeHives.length > 0) {
    beeHive = getBeeHiveById(state.beeHives, beeHiveId);
  }

  const hiveTypeFormattedForDropdown = state.hiveTypes.map(hiveType => {
    return {
     value: hiveType.id,
      text: hiveType.hiveName
    };
  });

  return {
    beeHive: beeHive,
    hiveTypes: hiveTypeFormattedForDropdown
  };
}

function mapDispatchToProps(dispatch){

  return {
    actions: bindActionCreators(beeHiveActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageBeeHivePage);
