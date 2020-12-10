import actionTypes from '../actions/action-types';

const initialState = { favList: [] };

export default function favReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOAD_FAV_PRODUCTS:
      return {
        ...state,
        favList: [...action.favList],
      };

    case actionTypes.ADD_TO_FAVS:
      return {
        ...state,
        favList: [...action.favList],
      };

    case actionTypes.REMOVE_FROM_FAVS:
      return {
        ...state,
        favList: [...action.favList],
      };

    default:
      return state;
  }
}
