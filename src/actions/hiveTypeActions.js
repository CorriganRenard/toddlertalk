import HiveTypeApi from '../api/mockHiveTypeApi';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadHiveTypeSuccess(hiveTypes) {
  return {type: types.LOAD_HIVE_TYPE_SUCCESS, hiveTypes};
}

export function loadHiveTypes() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return HiveTypeApi.getAllHiveTypes().then(hiveTypes => {
      dispatch(loadHiveTypeSuccess(hiveTypes));
    }).catch(error => {
      throw(error);
    });
  };
}
