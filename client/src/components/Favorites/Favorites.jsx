/* eslint-disable react/no-this-in-sfc */
import React, { useEffect } from 'react';
import {
  View, Text, FlatList, Image, TouchableOpacity, Pressable,
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';
import PropTypes from 'prop-types';
import { useNavigation, CommonActions } from '@react-navigation/native';
import styles from './FavoritesStyles';
import {
  loadOrderProductsList, addOrderProduct,
  deleteOrderProduct, loadFavProductsList, removeFavProduct,
} from '../../redux/actions/productsActions';
import FooterNav from '../FooterNav/FooterNav';
import { productQuantity } from '../Products/productFunctions';

function Favorites({
  orderList, orderSize, dispatch, user, favList,
}) {
  const navigation = useNavigation();

  useEffect(
    () => {
      if (!favList?.length && user?.id) {
        dispatch(loadFavProductsList(user));
      }
    },
    [favList.length],
  );

  useEffect(
    () => {
      if (user?.id) {
        dispatch(loadOrderProductsList(user));
      }
    },
    [user, orderList?.length],
  );

  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <FlatList
          ListHeaderComponent={(
            <View style={{ width: '100%' }}>
              <View style={styles.title}>
                <TouchableOpacity
                  onPress={() => navigation.dispatch(CommonActions.goBack())}
                >
                  <Icon
                    name="arrowleft"
                    size={32}
                  />
                </TouchableOpacity>
                <Text style={styles.titleText}>Favoritos</Text>
              </View>
              {!favList.length
                && <Text style={styles.noFavorites}>¡Añade aquí tus productos favoritos!</Text>}
            </View>
            )}
          data={favList}
          horizontal={false}
            // eslint-disable-next-line no-unused-vars
          keyExtractor={(item, _index) => item._id}
          numColumns={2}
          renderItem={({ item }) => (
            <View style={styles.productView}>
              <View style={styles.imageContainer}>
                <Image
                  source={{ uri: item.img }}
                  style={styles.image}
                />
                <Pressable
                  style={styles.heartIconPresseable}
                  onPress={() => dispatch(removeFavProduct(item, user))}
                >
                  <Image
                    source={{ uri: 'https://trello-attachments.s3.amazonaws.com/5fc4dc9893cb2246bcf25278/5fc4e2ccad234f1c1cdcdb7a/1c43ae6daee6fb15ce91fd7e5913d3fe/icons8-heart-144.png' }}
                    style={styles.heartIcon}
                  />
                </Pressable>
              </View>
              <View style={styles.productTitleContainer}>
                <Text style={styles.productTitle}>{item.name}</Text>
              </View>
              <Text style={styles.price}>{`${item.price?.toFixed(2)} €`}</Text>
              <View style={styles.buttons}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => dispatch(deleteOrderProduct(item, user))}
                >
                  <Icon
                    color="#FFF"
                    name="minus"
                    size={30}
                  />
                </TouchableOpacity>
                <Text style={styles.quantity}>{productQuantity(item, orderList)}</Text>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => dispatch(addOrderProduct(item, user))}
                >
                  <Icon
                    color="#FFF"
                    name="plus"
                    size={30}
                  />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
      <FooterNav orderSize={orderSize} />
    </View>
  );
}

Favorites.propTypes = {
  dispatch: PropTypes.func.isRequired,
  orderList: PropTypes.arrayOf(PropTypes.object),
  orderSize: PropTypes.number.isRequired,
  user: PropTypes.shape({ id: PropTypes.string }),
  favList: PropTypes.arrayOf(PropTypes.object),
};

Favorites.defaultProps = {
  orderList: [],
  favList: [],
  user: {},
};

function mapStateToProps({
  productsReducer, orderReducer, authReducer, favsReducer,
}) {
  return {
    products: productsReducer.productsList,
    orderList: orderReducer.orderList,
    orderSize: orderReducer.orderSize,
    user: authReducer.user,
    favList: favsReducer.favList,
  };
}

export default connect(mapStateToProps)(Favorites);
