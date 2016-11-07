import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function superBoxReducer(state = initialState.superBoxes, action) {
  switch(action.type) {
    case types.LOAD_SUPERBOXES_SUCCESS:
      return action.superBoxes;

   case types.CREATE_SUPERBOXES_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.superBoxes)

      ];
      /*
    case types.UPDATE_BEEHIVES_SUCCESS:
      return [
        ...state.filter(beeHive => beeHive.id !== action.beeHives.id),
        Object.assign({}, action.beeHives)
      ];

    case types.DELETED_BEEHIVE:
      return [
        ...state,
        Object.filter({}, action.beeHives)
      ];*/

    default:
      return state;
  }
}
