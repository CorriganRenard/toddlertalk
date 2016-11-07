import SuperTypeApi from '../api/mockSuperTypeApi';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadSuperTypeSuccess(superTypes) {
  return {type: types.LOAD_SUPER_TYPE_SUCCESS, superTypes};
}

export function loadSuperTypes() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return SuperTypeApi.getAllSuperTypes().then(superTypes => {
      dispatch(loadSuperTypeSuccess(superTypes));
    }).catch(error => {
      throw(error);
    });
  };
}
