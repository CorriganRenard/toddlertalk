import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function superTypeReducer(state = initialState.superTypes, action) {
    switch(action.type) {
        case types.LOAD_SUPER_TYPE_SUCCESS:

            return action.superTypes;

        /*case types.CREATE_BEEHIVES_SUCCESS:
         return [
         ...state,
         Object.assign({}, action.beeHives)
         ];

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
