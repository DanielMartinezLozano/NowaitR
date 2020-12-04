/* eslint-disable react/no-this-in-sfc */
import React, { useEffect } from 'react';
import {
  View, Text, FlatList, Image, TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';
import PropTypes from 'prop-types';
import styles from './ProductsStyles';
import { loadProductList, loadOrderProductsList } from '../../redux/actions/productsActions';
import FooterNav from '../FooterNav/FooterNav';
import productQuantity from './productQuantity';

function Products({
  products, orderList, orderSize, dispatch,
}) {
  useEffect(
    () => {
      if (!products || !products.length) {
        dispatch(loadProductList());
      }
      if (!orderList || !orderList.length) {
        dispatch(loadOrderProductsList());
      }
    },
    [],
  );

  return (
    <View style={styles.body}>
      <View style={styles.container}>
        {products?.length !== 0 && (
          <FlatList
            ListHeaderComponent={(
              <View style={{ width: '100%' }}>
                <Text style={styles.title}>
                  {' '}
                  <Icon
                    name="arrowleft"
                    size={32}
                  />
                  {' '}
                  <Text>Bebidas</Text>
                </Text>
              </View>
            )}
            data={products}
            horizontal={false}
            keyExtractor={(item) => item.name}
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
};

Products.defaultProps = {
  products: [],
  orderList: [],
};

function mapStateToProps({ productsReducer, orderReducer }) {
  return {
    products: productsReducer.productsList,
    orderList: orderReducer.orderList,
    orderSize: orderReducer.orderSize,
  };
}

export default connect(mapStateToProps)(Products);
