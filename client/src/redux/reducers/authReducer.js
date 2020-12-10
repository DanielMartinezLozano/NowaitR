import actionTypes from '../actions/action-types';

const initialState = {};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOGIN_USER_GOOGLE:
      return {
        ...state,
        firebaseUser: action.firebaseUser,
      };

    case actionTypes.SEND_USER:
      return {
        ...state,
        user: action.user,
      };

    case actionTypes.LOGOUT_USER:
      return {
        ...state,
        firebaseUser: action.firebaseUser,
      };

    default:
      return state;
  }
}
