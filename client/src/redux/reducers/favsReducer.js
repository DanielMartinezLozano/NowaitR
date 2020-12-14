import actionTypes from '../actions/action-types';

const initialState = { favList: [] };

export default function favsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.LOAD_FAV_PRODUCTS:
    case actionTypes.ADD_TO_FAVS:
    case actionTypes.REMOVE_FROM_FAVS:
      return {
        ...state,
        favList: [...action.favList],
      };

    default:
      return state;
  }
}
