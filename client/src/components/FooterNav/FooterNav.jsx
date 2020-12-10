import {
  Image, Text, View, TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';
import styles from './FooterNavStyles';

function FooterNav({ orderSize }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container} testID="FooterNav">
      <TouchableOpacity
        style={styles.productsContainer}
        onPress={() => navigation.navigate('order')}
      >
        <Text style={styles.products}>{orderSize}</Text>
        <Text style={styles.products}>Productos</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.waiterContainer}
        onPress={() => navigation.navigate('order')}
        testID="orderButton"
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
        <Icon name="heart" size={24} />
        <Text>Favoritos</Text>
      </View>
    </View>
  );
}

FooterNav.propTypes = {
  orderSize: PropTypes.number.isRequired,
};

export default FooterNav;
