/* eslint-disable camelcase */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import {
  View, Text, TouchableHighlight, Image, ImageBackground, StatusBar,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './LoginStyles';
import { loginGoogle, sendUser } from '../../redux/actions/userActions';
import Loading from '../Loading/Loading';

function Login({
  dispatch, navigation, firebaseUser, mongoUser,
}) {
  const [state, setState] = useState({ loading: true });

  function handleLoginClick() {
    dispatch(loginGoogle());
  }

  useEffect(() => {
    if (firebaseUser.id) {
      dispatch(sendUser({
        id: firebaseUser.id,
        name: firebaseUser.name,
        email: firebaseUser.email,
      }));
      navigation.reset({
        index: 0,
        routes: [{ name: 'qrcode' }],
      });
    }
  }, [firebaseUser]);

  return (
    <ImageBackground
      style={styles.container}
      source={{ uri: 'https://trello-attachments.s3.amazonaws.com/5fc4dc9893cb2246bcf25278/5fc4dc9993cb2246bcf252bc/ce67ae97dc995470269ee0de253dff06/pizza-gif.gif' }}
      onLoadStart={() => setState({ loading: true })}
      onLoadEnd={() => { setState({ loading: false }); }}
    >
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>¡Bienvenido!</Text>
      <Text style={styles.subtitle}>Inicia sesión para empezar tu pedido</Text>
      <TouchableHighlight
        onPress={() => handleLoginClick()}
        style={styles.button}
        underlayColor="rgba(82, 133, 236, 0.2)"
      >
        <View style={styles.buttonContainer}>
          <View style={styles.buttonView}>
            <Image
              style={{ width: 30, height: 30 }}
              source={{ uri: 'https://trello-attachments.s3.amazonaws.com/5fc4dc9893cb2246bcf25278/5fc4e2ccad234f1c1cdcdb7a/cbf19173201d9dafdbdec9e359245fdb/icons8-google-240.png' }}
            />
            <Text style={styles.buttonText}>Inicia Sesión con Google</Text>
          </View>
        </View>
      </TouchableHighlight>
      <Text style={styles.owner}>Soy propietario de un restaurante</Text>
      <Image
        style={styles.logo}
        source={{ uri: 'https://trello-attachments.s3.amazonaws.com/5fc4dc9893cb2246bcf25278/5fc4dc9993cb2246bcf252be/7b072f968b3b6d4f4f2c6ffd249e3272/big-vertical-logo.png' }}
      />
      <View style={styles.footer} />
      {state.loading
      && (
      <View style={styles.loading}>
        <Loading />
      </View>
      )}
    </ImageBackground>
  );
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
  }).isRequired,
  firebaseUser: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
  }),
  mongoUser: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
  }),
};

Login.defaultProps = {
  firebaseUser: {},
  mongoUser: {},
};

function mapStateToProps({ authReducer }) {
  return {
    firebaseUser: authReducer.firebaseUser,
    mongoUser: authReducer.user,
  };
}

export default connect(mapStateToProps)(Login);
