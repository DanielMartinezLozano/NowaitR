import React, { useEffect } from 'react';
import {
  View, Text, FlatList, Image, TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';
import PropTypes from 'prop-types';
import styles from './ProductsStyles';
import { loadProductList } from '../../redux/actions/productsActions';

function Products({ products = [], dispatch }) {
  useEffect(
    () => {
      if (!products || !products.length) {
        dispatch(loadProductList());
      }
    },
    [],
  );

  return (
    <View style={styles.body}>
      <Text style={styles.title}>
        {' '}
        <Icon
          name="arrow-left-circle"
          size={32}
        />
        {' '}
        <Text>
          Products
        </Text>
      </Text>
      <View style={styles.container}>
        {products && products.length
              && (
              <FlatList
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
                    <Text style={styles.productTitle}>
                      {item.name}
                    </Text>
                    <Text style={styles.price}>
                      {item.price.toFixed(2)}
                      {' '}
                      €
                    </Text>
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
                      <Text style={styles.quantity}>
                        0
                      </Text>
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
    </View>
  );
}

Products.propTypes = {
  dispatch: PropTypes.func.isRequired,
  products: PropTypes.shape({
    length: PropTypes.func.isRequired,
  }).isRequired,
};

function mapStateToProps({ productsReducer }) {
  return {
    products: productsReducer.productsList,
  };
}

export default connect(mapStateToProps)(Products);
