import axios from 'axios';
import * as Network from 'expo-network';
import signinWithGoogle from '../../../config';
import actionTypes from './action-types';

let lanIp;
let usersURL = '';

async function getExpoIp() {
  lanIp = await Network.getIpAddressAsync();
  usersURL = `http://${lanIp}:4500/users/auth/`;
}

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
    await getExpoIp();
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
    await getExpoIp();
    try {
      const userItem = await axios.post(usersURL, userInfo);
      dispatch(sendUserSuccess(userItem));
    } catch (error) {
      dispatch(sendUserError(error));
    }
  };
}
