import * as Google from 'expo-google-app-auth';
import signinWithGoogle from '../../config';

jest.mock('expo-google-app-auth');

describe('config', () => {
  test('signinWithGoogle should return the result', async () => {
    Google.logInAsync = jest.fn().mockImplementationOnce(() => Promise.resolve(null));
    expect(await signinWithGoogle()).toBe(null);
  });

  test('signinWithGoogle should return error', async () => {
    Google.logInAsync = jest.fn().mockImplementationOnce(() => Promise.reject(Error));
    expect(await signinWithGoogle()).toBe(Error);
  });
});
