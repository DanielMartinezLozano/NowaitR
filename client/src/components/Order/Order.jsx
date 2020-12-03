import React, { useEffect } from 'react';
import { Text, View, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/EvilIcons';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './OrderStyles';

function Order({ orderProducts, dispatch }) {
  const navigation = useNavigation();

  useEffect(
    () => {
      if (!orderProducts || !orderProducts.length) {
        dispatch(loadProductList());
      }
    },
    [],
  );

  return (
    <FlatList
      ListHeaderComponent={(
        <View style={styles.titleContainer}>
          <TouchableOpacity
            onPress={() => navigation.dispatch(CommonActions.goBack())}
          >
            <Icon
              name="close"
              size={32}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Mi Pedido</Text>
        </View>
    )}
      data={orderProducts}
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
            <Text style={styles.quantity}>0</Text>
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
  );
}

Order.propTypes = {
  dispatch: PropTypes.func.isRequired,
  orderProducts: PropTypes.arrayOf(PropTypes.object),
};

Order.defaultProps = {
  orderProducts: [],
};

function mapStateToProps({ productsReducer }) {
  return {
    orderProducts: productsReducer.productsList,
  };
}

export default connect(mapStateToProps)(Order);
