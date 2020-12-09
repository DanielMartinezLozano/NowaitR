/* eslint-disable camelcase */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import {
  View, Text, TouchableHighlight, Image,
} from 'react-native';
import * as Google from 'expo-google-app-auth';
import firebase from 'firebase';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './LoginStyles';
import { loginGoogle, sendUser } from '../../redux/actions/userActions';

function Login({ dispatch, navigation, mongoUser }) {
  function handleLoginClick() {
    dispatch(loginGoogle());
  }

  useEffect(() => {
    if (mongoUser.id) {
      dispatch(sendUser({
        id: mongoUser.id,
        name: mongoUser.name,
        email: mongoUser.email,
        password: null,
        favs: [],
        admin: false,
        restaurant: null,
        saved: [],
        sent: [],
      }));
      navigation.navigate('categories');
    }
  }, [mongoUser]);

  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={() => handleLoginClick()}
        style={styles.button}
        underlayColor="rgba(82, 133, 236, 0.2)"
      >
        <View style={styles.buttonView}>
          <Image
            style={{ width: 30, height: 30 }}
            source={{ uri: 'https://trello-attachments.s3.amazonaws.com/5fc4dc9893cb2246bcf25278/5fc4e2ccad234f1c1cdcdb7a/cbf19173201d9dafdbdec9e359245fdb/icons8-google-240.png' }}
          />
          <Text style={styles.buttonText}>Inicia Sesión con Google</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  mongoUser: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
  }),
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
