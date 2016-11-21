let beeHives = [];

export default function beeHiveReducer(state = beeHives, action) {
  switch(action.type) {
    case 'LOAD_BEEHIVES_SUCCESS':
      return action.beeHives;

    case 'CREATE_BEEHIVES_SUCCESS':
      return [
        ...state,
        Object.assign({}, action.beeHives)
      ];

    case 'UPDATE_BEEHIVES_SUCCESS':
      return [
        ...state.filter(beeHive => beeHive.id !== action.beeHives.id),
        Object.assign({}, action.beeHives)
      ];

    case 'DELETED_BEEHIVE':
      return [
        ...state,
        Object.filter({}, action.beeHives)
      ];

    default:
      return state;
  }
}
