/* eslint-disable react/destructuring-assignment */
import { View } from 'native-base';
import React, { useEffect } from 'react';
import { Image, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import { useIsFocused } from '@react-navigation/native';
import { connect } from 'react-redux';
import styles from './LoadingStyles';
import { loadUser } from '../../redux/actions/userActions';

function Loading({ dispatch, navigation }) {
  function checkIfLoggedIn() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(loadUser(user.providerData[0].uid));
        setTimeout(() => { navigation.navigate('categories'); }, 3000);
      } else {
        navigation.navigate('login');
      }
    });
  }

  const isFocused = useIsFocused();
  useEffect(() => {
    checkIfLoggedIn();
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Image
        style={{ width: 200, height: 200 }}
        source={{ uri: 'https://trello-attachments.s3.amazonaws.com/5fc4dc9893cb2246bcf25278/5fc4dc9993cb2246bcf252be/7b072f968b3b6d4f4f2c6ffd249e3272/big-vertical-logo.png' }}
      />
    </View>
  );
}

Loading.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  mongoUser: PropTypes.shape({}),
};

Loading.defaultProps = {
  mongoUser: {},
};

function mapStateToProps({ authReducer }) {
  return {
    mongoUser: authReducer.user,
  };
}

export default connect(mapStateToProps)(Loading);
