import {
  Image, Text, View, TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import styles from './FooterNavStyles';

function FooterNav() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.productsContainer}>
        <Text style={styles.products}>0</Text>
        <Text style={styles.products}>Products</Text>
      </View>
      <TouchableOpacity
        style={styles.waiterContainer}
        onPress={() => navigation.navigate('order')}
      >
        <Image
          source={{
            uri:
              'https://trello-attachments.s3.amazonaws.com/5fc4dc9893cb2246bcf25278/5fc4e2ccad234f1c1cdcdb7a/ea8cea48cfd26005cdd1b12c26af24b0/icons8-waiter-100.png',
          }}
          style={styles.icon}
        />
      </TouchableOpacity>
      <View style={styles.favContainer}>
        <Icon name="heart" size={32} />
        <Text>Favoritos</Text>
      </View>
    </View>
  );
}

export default FooterNav;
