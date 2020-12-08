import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  View, Text, ImageBackground, TouchableOpacity,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import FooterNav from '../FooterNav/FooterNav';
import styles from './CategoriesStyles';

function Categories({ orderSize }) {
  const navigation = useNavigation();

  return (
    <View testID="categoriesContainer" style={styles.container}>
      <ScrollView style={styles.body}>
        <ImageBackground
          source={{ uri: 'https://trello-attachments.s3.amazonaws.com/5fc4dc9893cb2246bcf25278/5fc4dc9993cb2246bcf252bc/187a250197be6825c7e7867bc246bd26/restaurant-photo.jpg' }}
          style={styles.image}
        >
          <Text style={styles.title}>Restaurante Skylab</Text>
        </ImageBackground>
        <View style={styles.categories}>
          <View style={styles.row}>
            <ImageBackground
              style={styles.category}
              source={{ uri: 'https://trello-attachments.s3.amazonaws.com/5fc4dc9893cb2246bcf25291/670x420/0f21ca39e2465288c0cc706c869be590/primeros-category.png.jpg' }}
            >
              <TouchableOpacity onPress={() => navigation.navigate('products')}>
                <Text style={styles.categoryName}>
                  Primeros
                </Text>
              </TouchableOpacity>
            </ImageBackground>
            <ImageBackground
              style={styles.category}
              source={{ uri: 'https://trello-attachments.s3.amazonaws.com/5fc4dc9893cb2246bcf25278/5fc4dc9893cb2246bcf25291/22aecdb5a54aee755a862e1171f00aa0/segundos-category.jpg' }}
            >
              <TouchableOpacity onPress={() => navigation.navigate('products')}>
                <Text style={styles.categoryName}>
                  Segundos
                </Text>
              </TouchableOpacity>
            </ImageBackground>
          </View>
          <View style={styles.row}>
            <ImageBackground
              style={styles.category}
              source={{ uri: 'https://trello-attachments.s3.amazonaws.com/5fc4dc9893cb2246bcf25278/5fc4dc9893cb2246bcf25291/9a3893ef3f3db2bbfc220077ec13a508/drinks-category.jpg' }}
            >
              <TouchableOpacity onPress={() => navigation.navigate('products')}>
                <Text style={styles.categoryName}>
                  Bebidas
                </Text>
              </TouchableOpacity>
            </ImageBackground>
            <ImageBackground
              style={styles.category}
              source={{ uri: 'https://trello-attachments.s3.amazonaws.com/5fc4dc9893cb2246bcf25278/5fc4dc9893cb2246bcf25291/1c7760ec833319a90b00c7ed28bdfd7a/offers-category.jpg' }}
            >
              <TouchableOpacity onPress={() => navigation.navigate('products')}>
                <Text style={styles.categoryName}>
                  Ofertas
                </Text>
              </TouchableOpacity>
            </ImageBackground>
          </View>
          <View style={styles.row}>
            <ImageBackground
              style={styles.category}
              source={{ uri: 'https://trello-attachments.s3.amazonaws.com/5fc4dc9893cb2246bcf25278/5fc4dc9893cb2246bcf25291/95716fbed0d2b2ebcdf624fcc54f998b/desserts-category.jpg' }}
            >
              <TouchableOpacity onPress={() => navigation.navigate('products')}>
                <Text style={styles.categoryName}>
                  Postres
                </Text>
              </TouchableOpacity>
            </ImageBackground>
            <ImageBackground
              style={styles.category}
              source={{ uri: 'https://trello-attachments.s3.amazonaws.com/5fc4dc9893cb2246bcf25278/5fc4dc9893cb2246bcf25291/a94100a023489168666411809e02164d/tapas-category.jpg' }}
            >
              <TouchableOpacity onPress={() => navigation.navigate('products')}>
                <Text style={styles.categoryName}>
                  Tapas
                </Text>
              </TouchableOpacity>
            </ImageBackground>
          </View>
        </View>
      </ScrollView>
      <FooterNav orderSize={orderSize} />
    </View>
  );
}

Categories.propTypes = {
  orderSize: PropTypes.number,
};

Categories.defaultProps = {
  orderSize: 0,
};

function mapStateToProps({ orderReducer }) {
  return {
    orderSize: orderReducer.orderSize,
  };
}

export default connect(mapStateToProps)(Categories);
