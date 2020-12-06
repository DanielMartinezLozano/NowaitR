/* eslint-disable camelcase */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import React from 'react';
import { View, Button, Text } from 'react-native';
import * as Google from 'expo-google-app-auth';
import firebase from 'firebase';
import styles from './LoginStyles';
import { addUser } from '../../redux/actions/userActions';

export default function Login() {
  function isUserEqual(googleUser, firebaseUser) {
    if (firebaseUser) {
      const { providerData } = firebaseUser;
      for (let i = 0; i < providerData.length; i += 1) {
        if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID
                && providerData[i].uid === googleUser.getBasicProfile().getId()) {
          // We don't need to reauth the Firebase connection.
          return true;
        }
      }
    }
    return false;
  }

  function onSignIn(googleUser) {
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    const unsubscribe = firebase.auth().onAuthStateChanged((firebaseUser) => {
      unsubscribe();
      // Check if we are already signed-in Firebase with the correct user.
      if (!isUserEqual(googleUser, firebaseUser)) {
        // Build Firebase credential with the Google ID token.
        const credential = firebase.auth.GoogleAuthProvider.credential(
          googleUser.idToken,
          googleUser.accessToken,
        );

        // Sign in with credential from the Google user.
        firebase.auth().signInWithCredential(credential).then(
          (result) => {
            if (result.additionalUserInfo.isNewUser) {
              addUser(result.additionalUserInfo.profile);
            }
            const { sub } = result.additionalUserInfo.profile;
            // loadUser(sub);
          },
        ).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const { email } = error;
          // The firebase.auth.AuthCredential type that was used.
          const { credential } = error;
          // ...
        });
      } else {
        console.log('User already signed-in Firebase.');
      }
    });
  }

  async function signInWithGoogleAsync() {
    try {
      const result = await Google.logInAsync({
        // androidClientId: YOUR_CLIENT_ID_HERE,
        iosClientId: '911481650727-c5qtavkbcnuqge0o8lbnnb7mtndtrbh9.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      });

      if (result.type === 'success') {
        onSignIn(result);
        return result.accessToken;
      }
      return { cancelled: true };
    } catch (e) {
      return { error: true };
    }
  }

  return (
    <View style={styles.container}>
      <Button
        onPress={() => signInWithGoogleAsync()}
      >
        <Text>Inicia sesión con Google</Text>
      </Button>
    </View>
  );
}
