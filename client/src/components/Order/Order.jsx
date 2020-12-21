import React, { useEffect, useState } from 'react';
import {
  Text, View, Modal, Image,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { logOutUser } from '../../redux/actions/userActions';
import {
  addOrderProduct, loadOrderProductsList, deleteOrderProduct, sendOrder, clearOrder,
} from '../../redux/actions/productsActions';
import totalPrice from './totalPrice';
import styles from './OrderStyles';

function Order({
  orderList, sentList, dispatch, mongoUser,
}) {
  const navigation = useNavigation();
  const [orderModalVisible, setOrderModalVisible] = useState(false);
  const [paymentModalVisible, setPaymentModalVisible] = useState(false);
  const [exitModalVisible, setExitModalVisible] = useState(false);

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
        {orderList.length !== 0
        && <Text style={styles.sectionTitle}>Pendientes de enviar:</Text>}
        {!orderList.length
                && <Text style={styles.noOrder}>¡Añade productos para hacer un pedido!</Text>}
        {orderList.map((item) => (
          <View style={styles.productView} key={Math.random() * Math.random()}>
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

        {sentList.length !== 0
        && <Text style={styles.sectionTitle}>Pedidos realizados:</Text>}
        {sentList.map((item) => (
          <View style={{ ...styles.productView, backgroundColor: '#d3d3d3' }} key={`${item.product.id}-${item.quantity * item.product.price}`}>
            <View style={styles.buttons}>
              <Text style={styles.quantity}>{`${item.quantity} x`}</Text>
              <View style={styles.productInfo}>
                <Text style={styles.productTitle}>{item.product.name}</Text>
                <Text style={styles.price}>{`${item.product.price?.toFixed(2)} €`}</Text>
              </View>
              <Text style={styles.totalSentProduct}>{`${item.quantity * item.product.price} €`}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.totalContainer}>
        <View>
          {orderList.length === 0 && sentList.length !== 0
        && (
        <TouchableOpacity
          style={styles.paymentButton}
          onPress={() => { setPaymentModalVisible(!paymentModalVisible); }}
        >
          <Image
            source={{ uri: 'https://trello-attachments.s3.amazonaws.com/5fc4dc9893cb2246bcf25278/5fc4e2ccad234f1c1cdcdb7a/cc35576d52fd092584d7de3d2af8fbc7/icons8-euro-96.png' }}
            style={styles.paymentImage}
          />
          <Text style={styles.paymentText}>Pagado</Text>
        </TouchableOpacity>
        )}
        </View>
        <View style={styles.totalTextAndNumber}>
          <Text style={styles.totalText}>Total:</Text>
          <Text style={styles.totalAmount}>{`${totalPrice(orderList, sentList)} €`}</Text>
        </View>
      </View>

      {orderList.length === 0
      && (
      <View style={{ ...styles.submit, backgroundColor: '#7e7e7e' }}>
        <TouchableOpacity
          style={styles.submitTouchable}
          disabled
        >
          <Text style={styles.submitText}>Añade productos para pedir</Text>
        </TouchableOpacity>
      </View>
      )}

      {orderList.length !== 0
      && (
      <View style={styles.submit}>
        <TouchableOpacity
          style={styles.submitTouchable}
          onPress={() => {
            dispatch(sendOrder(mongoUser));
            setOrderModalVisible(!orderModalVisible);
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
      )}

      <Modal
        animationType="slide"
        transparent
        visible={orderModalVisible}
        onRequestClose={() => {
          // Alert.alert('Modal has been closed.');
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => {
                setOrderModalVisible(!orderModalVisible);
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

      <Modal
        animationType="slide"
        transparent
        visible={paymentModalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => {
                setPaymentModalVisible(!paymentModalVisible);
              }}
            >
              <Icon
                color="#202020"
                name="close"
                size={30}
              />
            </TouchableOpacity>

            <View style={styles.modalContent}>
              <Text style={styles.modalText}>¿Has realizado el pago en caja?</Text>
              <View style={styles.yesNoContainer}>
                <TouchableOpacity
                  style={styles.yesNoButton}
                  onPress={() => {
                    dispatch(clearOrder(mongoUser));
                    setPaymentModalVisible(!paymentModalVisible);
                    setExitModalVisible(!exitModalVisible);
                  }}
                >
                  <Text style={styles.yesNoText}>Sí</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.yesNoButton}
                  onPress={() => setPaymentModalVisible(!paymentModalVisible)}
                >
                  <Text style={styles.yesNoText}>No</Text>
                </TouchableOpacity>
              </View>
              <Image
                source={{ uri: 'https://trello-attachments.s3.amazonaws.com/5fc4dc9893cb2246bcf25278/5fc4e2ccad234f1c1cdcdb7a/328be75a59c669aebec299e9e234dbd8/icons8-cash-register-euro-96.png' }}
                style={styles.modalImage}
              />
            </View>

          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent
        visible={exitModalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => {
                setExitModalVisible(!exitModalVisible);
              }}
            >
              <Icon
                color="#202020"
                name="close"
                size={30}
              />
            </TouchableOpacity>

            <View style={styles.modalContent}>
              <Text style={styles.modalText}>Gracias por tu visita,</Text>
              <Text style={styles.modalText}>¡Hasta pronto!</Text>
              <View style={styles.yesNoContainer}>
                <TouchableOpacity
                  style={{ ...styles.yesNoButton, width: 180, height: 40 }}
                  onPress={() => {
                    setExitModalVisible(!exitModalVisible);
                    dispatch(logOutUser());
                    navigation.reset({ index: 0, routes: [{ name: 'login' }] });
                  }}
                >
                  <Text style={styles.yesNoText}>Cerrar sesión</Text>
                </TouchableOpacity>
              </View>
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
