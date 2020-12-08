import { Image, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import React from 'react';
import firebase from 'firebase';
import styles from './HeaderLogoStyles';

function HeaderLogo() {
  const renderLogOut = () => (
    <TouchableOpacity testID="signOutButton" onPress={() => firebase.auth().signOut()}>
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

export default HeaderLogo;
