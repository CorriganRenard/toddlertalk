import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';



const BeeHiveForm = ({beeHive, allHiveTypes, onSave, onChange, saving, errors}) => {
  return (
    <form className="container" id="form">
      <h1>Manage Hive</h1>
      <TextInput
        name="title"
        label="Title"
        value={beeHive.title}
        onChange={onChange}
        error={errors.title}/>

      <SelectInput
        name="hiveTypeId"
        label="Hive Type"
        value={beeHive.hiveTypeId}
        defaultOption="Select Hive Type"
        options={allHiveTypes}
        onChange={onChange} error={errors.hiveTypeId}/>

      <TextInput
        name="birthdate"
        label="Birth Date"
        value={beeHive.birthdate}
        onChange={onChange}
        error={errors.birthdate}/>

      <TextInput
        name="numsupers"
        label="Number of supers"
        value={beeHive.numsupers}
        onChange={onChange}
        error={errors.numsupers}/>

      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}/>
    </form>
  );
};

BeeHiveForm.propTypes = {
  beeHive: React.PropTypes.object.isRequired,
  allHiveTypes: React.PropTypes.array,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default BeeHiveForm;
