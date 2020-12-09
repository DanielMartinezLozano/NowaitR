import * as Google from 'expo-google-app-auth';

export const firebaseConfig = {
  apiKey: 'AIzaSyC4laGOdKB7m7PEQsTxiGAFQYgbG0L8hJY',
  authDomain: 'nowaitr-ebccc.firebaseapp.com',
  projectId: 'nowaitr-ebccc',
  storageBucket: 'nowaitr-ebccc.appspot.com',
  messagingSenderId: '911481650727',
  appId: '1:911481650727:web:ad2d58d4cc54c205475802',
};

export default async function signinWithGoogle() {
  try {
    const result = await Google.logInAsync({
      androidClientId: '911481650727-16pqsb2qhep5korq3l4v239088qqb4dk.apps.googleusercontent.com',
      iosClientId: '911481650727-c5qtavkbcnuqge0o8lbnnb7mtndtrbh9.apps.googleusercontent.com',
      scopes: ['profile', 'email'],
    });
    return result;
  } catch (error) {
    return error;
  }
}
