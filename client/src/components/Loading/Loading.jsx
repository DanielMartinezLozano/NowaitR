/* eslint-disable react/destructuring-assignment */
import { View } from 'native-base';
import React from 'react';
import { Image, StatusBar } from 'react-native';
import styles from './LoadingStyles';

function Loading() {
  return (
    <View testID="Loading" style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Image
        style={{ width: 200, height: 200 }}
        source={{ uri: 'https://trello-attachments.s3.amazonaws.com/5fc4dc9893cb2246bcf25278/5fc4dc9993cb2246bcf252be/7b072f968b3b6d4f4f2c6ffd249e3272/big-vertical-logo.png' }}
      />
    </View>
  );
}

export default Loading;
