import authReducer from '../redux/reducers/authReducer';
import actionTypes from '../redux/actions/action-types';

describe('authReducer', () => {
  test('action.type login user google should return user', () => {
    const action = { type: actionTypes.LOGIN_USER_GOOGLE, firebaseUser: {} };
    expect(authReducer(undefined, action)).toEqual({ firebaseUser: {} });
  });

  test('action.type send user should return user', () => {
    const action = { type: actionTypes.SEND_USER, user: {} };
    expect(authReducer(null, action)).toEqual({ user: {} });
  });

  test('action.type logout user should return user', () => {
    const action = { type: actionTypes.LOGOUT_USER, firebaseUser: {} };
    expect(authReducer(null, action)).toEqual({ firebaseUser: {} });
  });

  test('action.type logout user should return user', () => {
    const action = { type: actionTypes.ADD_TABLE, user: {} };
    expect(authReducer(null, action)).toEqual({ user: {} });
  });

  test('action.type logout user should return user', () => {
    expect(authReducer(null)).toEqual(null);
  });

  test('action.type null should return state default', () => {
    const initialState = {};
    const action = { type: null, firebaseUser: {} };
    expect(authReducer(initialState, action)).toEqual({ });
  });
});
