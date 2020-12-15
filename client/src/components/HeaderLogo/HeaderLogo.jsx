import { Image, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import React from 'react';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';
import styles from './HeaderLogoStyles';
import { logOutUser } from '../../redux/actions/userActions';

function HeaderLogo({ dispatch }) {
  const navigation = useNavigation();

  const renderLogOut = () => (
    <TouchableOpacity testID="signOutButton" onPress={() => { dispatch(logOutUser()); return navigation.reset({ index: 0, routes: [{ name: 'login' }] }); }}>
      <Image
        style={styles.logout}
        source={{ uri: 'https://cdn2.iconfinder.com/data/icons/picons-essentials/57/logout-512.png' }}
      />
    </TouchableOpacity>
  );

  return (
    <Header
      testID="HeaderLogo"
      leftComponent={(
        <Image
          source={{
            uri:
              // eslint-disable-next-line max-len
              'https://trello-attachments.s3.amazonaws.com/5fc4dc9893cb2246bcf25278/5fc4dc9993cb2246bcf252be/956c8087d4b40c7ec17bc4050c39294a/big-horizontal-logo.png',
          }}
          style={styles.logo}
        />
          )}
      rightComponent={() => renderLogOut()}
      containerStyle={styles.container}
      placement="center"
    />
  );
}

HeaderLogo.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps({ authReducer }) {
  return {
    user: authReducer.user,
  };
}

export default connect(mapStateToProps)(HeaderLogo);
