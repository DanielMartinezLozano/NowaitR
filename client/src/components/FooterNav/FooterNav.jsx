import {
  Image, Text, View, TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';
import { Badge } from 'react-native-elements';
import styles from './FooterNavStyles';

function FooterNav({ orderSize }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container} testID="FooterNav">
      <View style={styles.favContainer}>
        <TouchableOpacity
          style={styles.favTouchable}
          onPress={() => navigation.navigate('categories')}
          testID="menuButton"
        >
          <Icon name="restaurant" size={24} />
          <Text>Menu</Text>
        </TouchableOpacity>
      </View>
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
        {orderSize !== 0
        && (
        <Badge
          value={orderSize}
          badgeStyle={styles.badgeStyle}
          size={50}
          textStyle={{ color: 'black' }}
          containerStyle={{
            position: 'absolute', top: 0, right: 0,
          }}
        />
        )}
      </TouchableOpacity>
      <View style={styles.favContainer}>
        <TouchableOpacity
          style={styles.favTouchable}
          onPress={() => navigation.navigate('favorites')}
          testID="favoritesButton"
        >
          <Icon name="favorite-border" size={24} />
          <Text>Favoritos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

FooterNav.propTypes = {
  orderSize: PropTypes.number.isRequired,
};

export default FooterNav;
