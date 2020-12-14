import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  View, Text, ImageBackground, TouchableOpacity, StatusBar,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import FooterNav from '../FooterNav/FooterNav';
import styles from './CategoriesStyles';
import { loadFavProductsList, loadOrderProductsList } from '../../redux/actions/productsActions';

function Categories({
  orderSize, navigation, dispatch, user, favList,
}) {
  useEffect(
    () => {
      if (user?.id) {
        dispatch(loadOrderProductsList(user));
      }
    },
    [user, orderSize],
  );

  useEffect(
    () => {
      if (!favList?.length && user?.id) {
        dispatch(loadFavProductsList(user));
      }
    },
    [favList.length],
  );

  return (
    <View testID="categoriesContainer" style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        style={styles.body}
        showsVerticalScrollIndicator={false}
      >
        <ImageBackground
          source={{ uri: 'https://trello-attachments.s3.amazonaws.com/5fc4dc9893cb2246bcf25278/5fc4dc9993cb2246bcf252bc/f0333c30571b6c012effbe9f303b7e4b/La_Foug%C3%A9re_Restaurant_at_sunset_-_Knockranny_House_Hotel_5.jpg' }}
          style={styles.image}
        >
          <View style={styles.imageBackground}>
            <Text style={styles.title}>Restaurante Skylab</Text>
          </View>
        </ImageBackground>
        <Text style={styles.subtitle}>¿Qué te apetece tomar hoy?</Text>
        <View style={styles.categories}>
          <View style={styles.row}>
            <ImageBackground
              style={styles.category}
              source={{ uri: 'https://trello-attachments.s3.amazonaws.com/5fc4dc9893cb2246bcf25291/670x420/0f21ca39e2465288c0cc706c869be590/primeros-category.png.jpg' }}
            >
              <View style={styles.categoryBackground}>
                <TouchableOpacity testID="primeros" onPress={() => navigation.navigate('products', { category: 'firsts' })} style={styles.touchable}>
                  <Text style={styles.categoryName}>
                    Primeros
                  </Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
            <ImageBackground
              style={styles.category}
              source={{ uri: 'https://trello-attachments.s3.amazonaws.com/5fc4dc9893cb2246bcf25278/5fc4dc9893cb2246bcf25291/22aecdb5a54aee755a862e1171f00aa0/segundos-category.jpg' }}
            >
              <View style={styles.categoryBackground}>
                <TouchableOpacity testID="segundos" onPress={() => navigation.navigate('products', { category: 'seconds' })} style={styles.touchable}>
                  <Text style={styles.categoryName}>
                    Segundos
                  </Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.row}>
            <ImageBackground
              style={styles.category}
              source={{ uri: 'https://trello-attachments.s3.amazonaws.com/5fc4dc9893cb2246bcf25278/5fc4dc9893cb2246bcf25291/9a3893ef3f3db2bbfc220077ec13a508/drinks-category.jpg' }}
            >
              <View style={styles.categoryBackground}>
                <TouchableOpacity testID="bebidas" onPress={() => navigation.navigate('products', { category: 'drinks' })} style={styles.touchable}>
                  <Text style={styles.categoryName}>
                    Bebidas
                  </Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
            <ImageBackground
              style={styles.category}
              source={{ uri: 'https://trello-attachments.s3.amazonaws.com/5fc4dc9893cb2246bcf25278/5fc4dc9893cb2246bcf25291/1c7760ec833319a90b00c7ed28bdfd7a/offers-category.jpg' }}
            >
              <View style={styles.categoryBackground}>
                <TouchableOpacity testID="ofertas" onPress={() => navigation.navigate('products', { category: 'offers' })} style={styles.touchable}>
                  <Text style={styles.categoryName}>
                    Ofertas
                  </Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.row}>
            <ImageBackground
              style={styles.category}
              source={{ uri: 'https://trello-attachments.s3.amazonaws.com/5fc4dc9893cb2246bcf25278/5fc4dc9893cb2246bcf25291/95716fbed0d2b2ebcdf624fcc54f998b/desserts-category.jpg' }}
            >
              <View style={styles.categoryBackground}>
                <TouchableOpacity testID="postres" onPress={() => navigation.navigate('products', { category: 'desserts' })} style={styles.touchable}>
                  <Text style={styles.categoryName}>
                    Postres
                  </Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
            <ImageBackground
              style={styles.category}
              source={{ uri: 'https://trello-attachments.s3.amazonaws.com/5fc4dc9893cb2246bcf25278/5fc4dc9893cb2246bcf25291/a94100a023489168666411809e02164d/tapas-category.jpg' }}
            >
              <View style={styles.categoryBackground}>
                <TouchableOpacity testID="tapas" onPress={() => navigation.navigate('products', { category: 'tapas' })} style={styles.touchable}>
                  <Text style={styles.categoryName}>
                    Tapas
                  </Text>
                </TouchableOpacity>
              </View>
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
  navigation: PropTypes.shape({ navigate: PropTypes.func }).isRequired,
  dispatch: PropTypes.func.isRequired,
  favList: PropTypes.arrayOf(PropTypes.object),
  user: PropTypes.shape({
    id: PropTypes.string,
    favs: PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ])),
  }),
};

Categories.defaultProps = {
  orderSize: 0,
  favList: [],
  user: {},
};

function mapStateToProps({ orderReducer, authReducer, favsReducer }) {
  return {
    orderSize: orderReducer.orderSize,
    orderList: orderReducer.orderList,
    user: authReducer.user,
    favList: favsReducer.favList,
  };
}

export default connect(mapStateToProps)(Categories);
