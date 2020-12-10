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
      // console.log(action.favList);
      return {
        ...state,
        favList: [...action.favList],
      };

      /*     case actionTypes.DELETE_FROM_ORDER:
      return {
        ...state,
        favList: [...action.favList],
      }; */

    default:
      return state;
  }
}
