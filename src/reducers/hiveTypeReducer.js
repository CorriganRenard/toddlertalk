import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function hiveTypeReducer(state = initialState.hiveTypes, action) {
  switch(action.type) {
    case types.LOAD_HIVE_TYPE_SUCCESS:

      return action.hiveTypes;

    default:
      return state;
  }
}

