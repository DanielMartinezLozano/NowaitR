import axios from 'axios';
import signinWithGoogle from '../../../config';
import actionTypes from './action-types';
import endpoints from './endpoints';

function loginGoogleSuccess(firebaseUser) {
  return {
    type: actionTypes.LOGIN_USER_GOOGLE,
    firebaseUser,
  };
}

function loginGoogleError(error) {
  return {
    type: actionTypes.LOGIN_USER_GOOGLE_ERROR,
    error,
  };
}

export function loginGoogle() {
  return async (dispatch) => {
    try {
      const { user } = await signinWithGoogle();
      dispatch(loginGoogleSuccess(user));
    } catch (error) {
      dispatch(loginGoogleError(error));
    }
  };
}

function sendUserSuccess(user) {
  return {
    type: actionTypes.SEND_USER,
    user,
  };
}

function sendUserError(error) {
  return {
    type: actionTypes.SEND_USER_ERROR,
    error,
  };
}

export function sendUser(userInfo) {
  return async (dispatch) => {
    try {
      const userItem = await axios.post(endpoints.usersURL, userInfo);
      dispatch(sendUserSuccess(userItem.data));
    } catch (error) {
      dispatch(sendUserError(error));
    }
  };
}

export function logOutUserSuccess(firebaseUser) {
  return {
    type: actionTypes.LOGOUT_USER,
    firebaseUser,
  };
}

export function logOutUser() {
  return async (dispatch) => {
    const user = {};
    dispatch(logOutUserSuccess(user));
  };
}

function addTableNumSuccess(user) {
  return {
    type: actionTypes.ADD_TABLE,
    user,
  };
}

function addTableNumError(error) {
  return {
    type: actionTypes.ADD_TABLE_ERROR,
    error,
  };
}

export function addTableNum(table, user) {
  return async (dispatch) => {
    try {
      const newUser = await axios.patch(
        `${endpoints.tableURL}${user.id}`,
        { table },
      );
      dispatch(addTableNumSuccess(newUser.data));
    } catch (error) {
      dispatch(addTableNumError(error));
    }
  };
}
