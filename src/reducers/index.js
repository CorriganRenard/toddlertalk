import {combineReducers} from 'redux';
import beeHives from './beeHiveReducer';
import hiveTypes from './hiveTypeReducer';
import superBoxes from './superBoxReducer';
import superTypes from './superTypeReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  beeHives,
  hiveTypes,
  superTypes,
  ajaxCallsInProgress
});

export default rootReducer;
