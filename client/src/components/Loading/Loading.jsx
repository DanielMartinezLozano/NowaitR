/* eslint-disable react/destructuring-assignment */
import { View } from 'native-base';
import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import firebase from 'firebase';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function Loading({ navigation }) {
  (function checkIfLoggedIn() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate('categories');
      } else {
        navigation.navigate('login');
      }
    });
  }());

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
}

Loading.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
