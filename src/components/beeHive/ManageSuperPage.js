import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as beeHiveActions from '../../actions/beeHiveActions';
import SuperBoxForm from './supers/SuperBoxForm';


class ManageSuperPage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      superBox: Object.assign({}, this.props.superBox),
      errors: {}
    };
    this.updateSuperState = this.updateSuperState.bind(this);
    this.saveSuperBox = this.saveSuperBox.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if ( this.props.superBox.id != nextProps.superBox.id) {
      this.setState({superBox: Object.assign({}, nextProps.superBox)});
    }
  }

  updateSuperState(event) {
    const field = event.target.name;
    let superBox = this.state.superBox;
    superBox[field] = event.target.value;
    return this.setState({superBox: superBox});

  }

  saveSuperBox(event) {
    event.preventDefault();
    this.props.actions.saveSuperBox(this.state.superBox)
      .then(() => this.redirect());
  }

  redirect(){

    this.context.router.push('/beehives/' );
  }


  render() {
    return(

      <SuperBoxForm
        allSuperTypes={this.props.superTypes}
        onChange={this.updateSuperState}
        onSave={this.saveSuperBox}
        superBox={this.state.superBox}
        errors={this.state.errors}
      />

    );
  }
}

ManageSuperPage.propTypes = {
  superBox: PropTypes.object.isRequired,
  superBoxes: PropTypes.object.isRequired,
  superTypes: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired


};

ManageSuperPage.contextTypes = {
  router: PropTypes.object
};

function getBeeHiveById(beeHives, id) {
    const beeHive = beeHives.filter(beeHive => beeHive.id == id);
    if (beeHive.length) return beeHive[0];
    return null;
}

function mapStateToProps(state, ownProps){

    const beeHiveId = ownProps.params.id;


    let beeHive = getBeeHiveById(state.beeHives, beeHiveId);
    let superBox = {id: '', title: '', superTypeId: '', frames: []};

 /* if (beeHiveId && state.beeHive.supers.id.length > 0) {
    superBox = getSuperById(beeHiveId.supers, beeHiveId);
  }*/

  const superTypeFormattedForDropdown = state.superTypes.map(superType => {
    return {
      value: superType.id,
      text: superType.superName
    };
  });

  return {
    beeHive: beeHive,
    beeHiveId: beeHiveId,
    superBox: superBox,
    superTypes: superTypeFormattedForDropdown
  };
}

function mapDispatchToProps(dispatch){

  return {
    actions: bindActionCreators(beeHiveActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageSuperPage);
