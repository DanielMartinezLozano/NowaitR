import { Image } from 'react-native';
import { Header } from 'react-native-elements';
import React from 'react';
import styles from './HeaderLogoStyles';

export default function HeaderLogo() {
  return (
    <Header
      centerComponent={(
        <Image
          source={{
            uri:
              // eslint-disable-next-line max-len
              'https://trello-attachments.s3.amazonaws.com/5fc4dc9893cb2246bcf25278/5fc4dc9993cb2246bcf252be/b8740e39ac1a9c32d6142c96dde0b757/nowaitr-row-logo.png',
          }}
          style={styles.logo}
        />
          )}
      containerStyle={styles.container}
      placement="center"
    />
  );
}
