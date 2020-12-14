import React, { useEffect, useState } from 'react';
import {
  Text, View, Modal, Image,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { addOrderProduct, loadOrderProductsList, deleteOrderProduct } from '../../redux/actions/productsActions';
import totalPrice from './totalPrice';
import styles from './OrderStyles';

function Order({
  orderList, sentList, dispatch, mongoUser,
}) {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (!orderList?.length && mongoUser?.id) {
      dispatch(loadOrderProductsList(mongoUser.id));
    }
  },
  [orderList, mongoUser]);

  return (
    <View style={{ flex: 1 }} testID="Order">
      <ScrollView>
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

        <Text style={styles.sectionTitle}>Pendientes de enviar:</Text>
        {!orderList.length
                && <Text style={styles.noOrder}>¡Añade productos para hacer el pedido!</Text>}
        {orderList.map((item) => (
          <View style={styles.productView} key={`${item.product.name}-saved`}>
            <View style={styles.buttons}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => dispatch(deleteOrderProduct(item.product, mongoUser))}
              >
                <Icon
                  color="#FFF"
                  name="minus"
                  size={30}
                />
              </TouchableOpacity>
              <Text style={styles.quantity}>{item.quantity}</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => dispatch(addOrderProduct(item.product, mongoUser))}
              >
                <Icon
                  color="#FFF"
                  name="plus"
                  size={30}
                />
              </TouchableOpacity>
              <View style={styles.productInfo}>
                <Text style={styles.productTitle}>{item.product.name}</Text>
                <Text style={styles.price}>{`${item.product.price?.toFixed(2)} €`}</Text>
              </View>
            </View>
          </View>
        ))}

        <Text style={styles.sectionTitle}>Pedidos realizados:</Text>
        {sentList.map((item) => (
          <View style={{ ...styles.productView, backgroundColor: '#d3d3d3' }} key={`${item.product.name}-sent`}>
            <View style={styles.buttons}>
              <TouchableOpacity
                style={{ ...styles.button, backgroundColor: '#a8a8a8' }}
                disabled
              >
                <Icon
                  color="#FFF"
                  name="minus"
                  size={30}
                />
              </TouchableOpacity>
              <Text style={styles.quantity}>{item.quantity}</Text>
              <TouchableOpacity
                style={{ ...styles.button, backgroundColor: '#a8a8a8' }}
                disabled
              >
                <Icon
                  color="#FFF"
                  name="plus"
                  size={30}
                />
              </TouchableOpacity>
              <View style={styles.productInfo}>
                <Text style={styles.productTitle}>{item.product.name}</Text>
                <Text style={styles.price}>{`${item.product.price?.toFixed(2)} €`}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total:</Text>
        <Text style={styles.totalAmount}>{`${totalPrice(orderList)} €`}</Text>
      </View>
      <View style={styles.submit}>
        <TouchableOpacity
          style={styles.submitTouchable}
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <Text style={styles.submitText}>Enviar pedido a cocina</Text>
          <Icon
            name="arrowright"
            size={32}
            color="white"
          />
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={() => {
          // Alert.alert('Modal has been closed.');
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Icon
                color="#202020"
                name="close"
                size={30}
              />
            </TouchableOpacity>

            <View style={styles.modalContent}>
              <Text style={styles.modalText}>Tu pedido ha sido recibido en cocina</Text>
              <Text style={styles.modalText}>¡Marchando!</Text>
              <Image
                source={{ uri: 'https://trello-attachments.s3.amazonaws.com/5fc4dc9893cb2246bcf25278/5fc4e2ccad234f1c1cdcdb7a/7c3182c5d33a9e8092d1a8ed61b17acd/icons8-waiter-96.png' }}
                style={styles.modalImage}
              />
            </View>

          </View>
        </View>
      </Modal>

    </View>
  );
}

Order.propTypes = {
  dispatch: PropTypes.func.isRequired,
  orderList: PropTypes.arrayOf(PropTypes.object),
  sentList: PropTypes.arrayOf(PropTypes.object),
  mongoUser: PropTypes.shape({ id: PropTypes.string }),
};

Order.defaultProps = {
  orderList: [],
  sentList: [],
  mongoUser: {},
};

function mapStateToProps({ orderReducer, authReducer }) {
  return {
    sentList: orderReducer.sentList,
    orderList: orderReducer.orderList,
    mongoUser: authReducer.user,
  };
}

export default connect(mapStateToProps)(Order);
