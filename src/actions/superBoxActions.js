import * as types from './actionTypes';
import SuperBoxApi from '../api/mockSuperBoxApi';
import BeeHiveApi from '../api/mockBeeHiveApi';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadSuperBoxesSuccess(superBoxes) {

  return { type: types.LOAD_SUPERBOXES_SUCCESS, superBoxes};
}

export function createSuperBoxesSuccess(superBoxes) {

  return { type: types.CREATE_SUPERBOXES_SUCCESS, superBoxes};
}
export function deleteSuperBox(superBoxes) {

  return { type: types.DELETED_SUPERBOX, superBoxes};
}



export function updateSuperBoxesSuccess(superBoxes) {

  return { type: types.UPDATE_SUPERBOXES_SUCCESS, superBoxes};
}

export function loadSuperBoxes() {
  return function(dispatch){
    dispatch(beginAjaxCall());
    return SuperBoxApi.getAllSuperBoxes().then(superBoxes => {
      dispatch(loadSuperBoxesSuccess(superBoxes));
    }).catch(error => {
      throw(error);
    });
  };
}


export function saveSuperBox(beeHive, superBox) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return BeeHiveApi.saveSuperBox(superBox).then(savedSuperBox => {
      superBox.id ? dispatch(updateSuperBoxesSuccess(savedSuperBox)) :
        dispatch(createSuperBoxesSuccess(savedSuperBox));
    }).catch(error => {
      throw(error);
    });
  };
}


