import axios from 'axios';
// import firebase from 'firebase';
import actionTypes from './action-types';

const usersURL = 'http://192.168.1.122:4500/users/auth/';

export function addUserError(error) {
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
