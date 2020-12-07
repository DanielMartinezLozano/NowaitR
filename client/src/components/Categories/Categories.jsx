import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import FooterNav from '../FooterNav/FooterNav';
import styles from './CategoriesStyles';

function Categories({ orderSize }) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.body}>
        <Image
          source={{ uri: 'https://trello-attachments.s3.amazonaws.com/5fc4dc9893cb2246bcf25278/5fc4dc9993cb2246bcf252bc/187a250197be6825c7e7867bc246bd26/restaurant-photo.jpg' }}
          style={styles.image}
        />
        <Text>Restaurante</Text>
        <View style={styles.categories}>
          <View style={styles.row}>
            <View style={styles.category}>
              <Text style={styles.categoryName}>
                Primeros
              </Text>
            </View>
            <View style={styles.category}>
              <Text style={styles.categoryName}>
                Segundos
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <FooterNav orderSize={orderSize} />
    </View>
  );
}

Categories.propTypes = {
  orderSize: PropTypes.number.isRequired,
};

function mapStateToProps({ orderReducer }) {
  return {
    orderSize: orderReducer.orderSize,
  };
}

export default connect(mapStateToProps)(Categories);
