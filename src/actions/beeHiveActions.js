import * as types from './actionTypes';
import BeeHiveApi from '../api/mockBeeHiveApi';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadBeeHivesSuccess(beeHives) {

  return { type: types.LOAD_BEEHIVES_SUCCESS, beeHives};
}

export function loadSuperBoxesSuccess(supers) {

  return { type: types.LOAD_SUPERBOXES_SUCCESS, supers};
}


export function createBeeHivesSuccess(beeHives) {

  return { type: types.CREATE_BEEHIVES_SUCCESS, beeHives};
}
export function deleteBeeHive(beeHives) {

  return { type: types.DELETED_BEEHIVE, beeHives};
}



export function updateBeeHivesSuccess(beeHives) {

  return { type: types.UPDATE_BEEHIVES_SUCCESS, beeHives};
}

export function loadBeeHives() {
  return function(dispatch){
    dispatch(beginAjaxCall());
    return BeeHiveApi.getAllBeeHives().then(beeHives => {
      dispatch(loadBeeHivesSuccess(beeHives));
    }).catch(error => {
      throw(error);
    });
  };
}
/*
export function loadSuperBoxes() {
  return function(dispatch){
    dispatch(beginAjaxCall());
    return BeeHiveApi.getAllSupers().then(supers => {
      dispatch(loadSuperBoxesSuccess(supers));
    }).catch(error => {
      throw(error);
    });
  };
}*/


export function saveBeeHive(beeHive) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return BeeHiveApi.saveBeeHive(beeHive).then(savedBeeHive => {
      beeHive.id ? dispatch(updateBeeHivesSuccess(savedBeeHive)) :
        dispatch(createBeeHivesSuccess(savedBeeHive));
    }).catch(error => {
      throw(error);
    });
  };
}


export function saveSuperBox(beeHive) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return BeeHiveApi.saveBeeHive(beeHive).then(savedBeeHive => {
     dispatch(updateBeeHivesSuccess(savedBeeHive));
    }).catch(error => {
      throw(error);
    });
  };
}
