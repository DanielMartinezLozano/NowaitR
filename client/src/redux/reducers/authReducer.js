import actionTypes from '../actions/action-types';

const initialState = {};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_USER:
      return {
        ...state,
        user: action.user,
      };

    case actionTypes.LOAD_USER:
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
}
