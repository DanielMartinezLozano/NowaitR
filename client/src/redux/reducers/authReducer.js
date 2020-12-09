import actionTypes from '../actions/action-types';

const initialState = {};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOGIN_USER_GOOGLE:
      return {
        ...state,
        user: action.user,
      };

    case actionTypes.SEND_USER:
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
}
