/* eslint-disable camelcase */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { View, Button, Text } from 'react-native';
import * as Google from 'expo-google-app-auth';
import firebase from 'firebase';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useIsFocused } from '@react-navigation/native';
import styles from './LoginStyles';
import { addUser, loadUser } from '../../redux/actions/userActions';

function Login({ dispatch, navigation, mongoUser }) {
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
              dispatch(addUser(result.additionalUserInfo.profile));
            } else {
              const { sub } = result.additionalUserInfo.profile;
              dispatch(loadUser(sub));
            }
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
        androidClientId: '911481650727-16pqsb2qhep5korq3l4v239088qqb4dk.apps.googleusercontent.com',
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
        title="Inicia sesión con Google"
        onPress={() => signInWithGoogleAsync()}
      />
    </View>
  );
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  mongoUser: PropTypes.shape({}),
};

Login.defaultProps = {
  mongoUser: {},
};

function mapStateToProps({ authReducer }) {
  return {
    mongoUser: authReducer.user,
  };
}

export default connect(mapStateToProps)(Login);
