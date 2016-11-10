import React from 'react';
import TextInput from '../../common/TextInput';
import SelectInput from '../../common/SelectInput';



const SuperBoxForm = ({superBox, allSuperTypes, onSave, onChange, saving, errors}) => {
  return (
    <form className="container" id="form">
      <h1>Manage Super</h1>
      <TextInput
        name="title"
        label="Title"
        value={superBox.title}
        onChange={onChange}
        error={errors.title}/>

      <SelectInput
        name="superTypeId"
        label="Super Type"
        value={superBox.superTypeId}
        defaultOption="Select Super Type"
        options={allSuperTypes}
        onChange={onChange} error={errors.superTypeId}/>

      <TextInput
        name="numframes"
        label="Number of frames"
        value={superBox.numframes}
        onChange={onChange}
        error={errors.numframes}/>

      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}/>
    </form>
  );
};

SuperBoxForm.propTypes = {
  superBox: React.PropTypes.object.isRequired,
  allSuperTypes: React.PropTypes.array,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default SuperBoxForm;
