import axios from 'axios';
import signinWithGoogle from '../../../config';
import actionTypes from './action-types';

const usersURL = 'http://192.168.0.34:4500/users/auth/';

function loginGoogleSuccess(user) {
  return {
    type: actionTypes.LOGIN_USER_GOOGLE,
    user,
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
      const userItem = await axios.post(usersURL, userInfo);
      dispatch(sendUserSuccess(userItem));
    } catch (error) {
      dispatch(sendUserError(error));
    }
  };
}

/* export function addUserError(error) {
  return {
    error,
    type: actionTypes.ADD_USER_ERROR,
  };
}

export function addUserSuccess(user) {
  return {
    user,
    type: actionTypes.ADD_USER,
  };
}

export function addUser(user) {
  return async (dispatch) => {
    try {
      const newUser = {
        name: user.name,
        password: null,
        email: user.email,
        favs: [],
        admin: false,
        restaurant: null,
        saved: [],
        sent: [],
        sub: user.sub,
      };
      const newUserResponse = axios.post(`${usersURL}${newUser.sub}`, newUser);
      dispatch(addUserSuccess(newUserResponse.data));
    } catch (error) {
      dispatch(addUserError(error));
    }
  };
}

export function loadUserError(error) {
  return {
    error,
    type: actionTypes.LOAD_USER_ERROR,
  };
}

export function loadUserSuccess(user) {
  return {
    user,
    type: actionTypes.LOAD_USER,
  };
}

export function loadUser(sub) {
  return async (dispatch) => {
    try {
      const userResponse = await axios.get(`${usersURL}${sub}`);
      dispatch(loadUserSuccess(userResponse.data));
    } catch (error) {
      dispatch(loadUserError(error));
    }
  };
}
 */
