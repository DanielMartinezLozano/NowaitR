import actionTypes from '../actions/action-types';

const initialState = {};

export default function authReducer(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.LOGIN_USER_GOOGLE:
    case actionTypes.LOGOUT_USER:
      return {
        ...state,
        firebaseUser: action.firebaseUser,
      };

    case actionTypes.ADD_TABLE:
    case actionTypes.SEND_USER:
    case actionTypes.SEND_ORDER:
    case actionTypes.CLEAR_ORDER:
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
}
