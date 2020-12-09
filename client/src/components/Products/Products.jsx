/* eslint-disable react/no-this-in-sfc */
import React, { useEffect } from 'react';
import {
  View, Text, FlatList, Image, TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';
import PropTypes from 'prop-types';
import { useNavigation, CommonActions } from '@react-navigation/native';
import styles from './ProductsStyles';
import {
  loadProductList, loadOrderProductsList, addOrderProduct,
  deleteOrderProduct,
} from '../../redux/actions/productsActions';
import FooterNav from '../FooterNav/FooterNav';
import productQuantity from './productQuantity';

function Products({
  products, orderList, orderSize, dispatch, mongoUser,
}) {
  const navigation = useNavigation();

  useEffect(
    () => {
      if (!products.length) {
        dispatch(loadProductList());
      }
    },
    [],
  );

  useEffect(
    () => {
      if (mongoUser.id) {
        dispatch(loadOrderProductsList(mongoUser));
      }
    },
    [mongoUser, orderList?.length],
  );

  return (
    <View style={styles.body}>
      <View style={styles.container}>
        {products.length !== 0 && (
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
                  <Text style={styles.titleText}>Bebidas</Text>
                </View>
              </View>
            )}
            data={products}
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
                </View>
                <Text style={styles.productTitle}>{item.name}</Text>
                <Text style={styles.price}>{`${item.price.toFixed(2)} €`}</Text>
                <View style={styles.buttons}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => dispatch(deleteOrderProduct(item, mongoUser))}
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
                    onPress={() => dispatch(addOrderProduct(item, mongoUser))}
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
        )}
      </View>
      <FooterNav orderSize={orderSize} />
    </View>
  );
}

Products.propTypes = {
  dispatch: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(PropTypes.object),
  orderList: PropTypes.arrayOf(PropTypes.object),
  orderSize: PropTypes.number.isRequired,
  mongoUser: PropTypes.shape({ id: PropTypes.string }),
};

Products.defaultProps = {
  products: [],
  orderList: [],
  mongoUser: {},
};

function mapStateToProps({ productsReducer, orderReducer, authReducer }) {
  return {
    products: productsReducer.productsList,
    orderList: orderReducer.orderList,
    orderSize: orderReducer.orderSize,
    mongoUser: authReducer.user,
  };
}

export default connect(mapStateToProps)(Products);
