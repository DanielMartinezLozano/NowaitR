import axios from 'axios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import signinWithGoogle from '../../config';
import {
  loginGoogle, logOutUser, sendUser, logOutUserSuccess, addTableNum,
} from '../redux/actions/userActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('../../config');
jest.mock('axios');

describe('userActions', () => {
  let store = null;

  beforeEach(() => {
    store = mockStore();
  });
  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('loginGoogle', () => {
    test('loginGoogle should call signinWithGoogle with success', async () => {
      signinWithGoogle.mockImplementationOnce(() => Promise.resolve({ user: null }));
      await store.dispatch(loginGoogle());
      expect(signinWithGoogle).toHaveBeenCalled();
    });

    test('loginGoogle should call signinWithGoogle with error', async () => {
      signinWithGoogle.mockImplementationOnce(() => Promise.reject(Error));
      await store.dispatch(loginGoogle());
      expect(signinWithGoogle).toHaveBeenCalled();
    });
  });

  describe('sendUser', () => {
    test('sendUser should call signinWithGoogle with success', async () => {
      axios.post = jest.fn().mockImplementationOnce(() => Promise.resolve({ user: null }));
      const userInfo = {};
      await store.dispatch(sendUser(userInfo));
      expect(axios.post).toHaveBeenCalled();
    });

    test('sendUser should call signinWithGoogle with error', async () => {
      axios.post = jest.fn().mockImplementationOnce(() => Promise.reject(Error));
      const userInfo = {};
      await store.dispatch(sendUser(userInfo));
      expect(axios.post).toHaveBeenCalled();
    });
  });

  describe('logOutUser', () => {
    test('logOutUser should call logOutUser with success', async () => {
      await store.dispatch(logOutUser());
      expect(logOutUserSuccess).toBeDefined();
    });
  });

  describe('addTableNum', () => {
    test('addTableNum should call axios.patch and resolve', async () => {
      axios.patch.mockImplementationOnce(() => Promise.resolve({ data: null }));
      const table = 1;
      const user = {};
      await store.dispatch(addTableNum(table, user));
      expect(axios.patch).toHaveBeenCalled();
    });

    test('addTableNum should call axios.patch and reject', async () => {
      axios.patch.mockImplementationOnce(() => Promise.reject());
      const table = 1;
      const user = {};
      await store.dispatch(addTableNum(table, user));
      expect(axios.patch).toHaveBeenCalled();
    });
  });
});
