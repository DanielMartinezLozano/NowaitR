/* eslint-disable react/destructuring-assignment */
import { View } from 'native-base';
import React from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import firebase from 'firebase';

export default function Loading({ navigation }) {
  (function checkIfLoggedIn() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate('products');
      } else {
        navigation.navigate('login');
      }
    });
  }());

  return (
    <View>
      <ActivityIndicator size="large" />
    </View>
  );
}

Loading.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
