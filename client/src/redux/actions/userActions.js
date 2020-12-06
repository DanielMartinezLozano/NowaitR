import axios from 'axios';
// import firebase from 'firebase';
import actionTypes from './action-types';

const usersURL = 'http://172.20.10.4:4500/users/';

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
      const newUserResponse = axios.post(usersURL, newUser);
      dispatch(addUserSuccess(newUserResponse.data));
    } catch (error) {
      dispatch(addUserError(error));
    }
  };
}
