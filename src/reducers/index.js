import {combineReducers} from 'redux';
import beeHives from './beeHiveReducer';

const rootReducer = combineReducers({
  beeHives
});

export default rootReducer;
