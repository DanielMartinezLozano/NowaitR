import axios from 'axios';
import actionTypes from './action-types';

const productsURL = 'http://192.168.1.122:4500/products';
const authURL = 'http://192.168.1.122:4500/users/auth/';
const userURL = 'http://192.168.1.122:4500/users/';

export function loadProductsSuccess(productsList) {
  return {
    productsList,
    type: actionTypes.LOAD_PRODUCTS,
  };
}

export function loadProductsError(error) {
  return {
    error,
    type: actionTypes.LOAD_PRODUCTS_ERROR,
  };
}

export function loadProductList() {
  return async (dispatch) => {
    try {
      const productsList = await axios.get(productsURL);
      dispatch(loadProductsSuccess(productsList.data));
    } catch (error) {
      dispatch(loadProductsError(error));
    }
  };
}

export function loadOrderProductsSuccess(orderList) {
  return {
    orderList,
    type: actionTypes.LOAD_ORDER_PRODUCTS,
  };
}

export function loadOrderProductsError(error) {
  return {
    error,
    type: actionTypes.LOAD_ORDER_PRODUCTS_ERROR,
  };
}

export function loadOrderProductsList(mongoUser) {
  return async (dispatch) => {
    try {
      const user = await axios.get(`${authURL}${mongoUser.sub}`);
      const orderList = user.data.saved;

      dispatch(loadOrderProductsSuccess(orderList));
    } catch (error) {
      dispatch(loadOrderProductsError(error));
    }
  };
}

export function addOrderProductError(error) {
  return {
    error,
    type: actionTypes.ADD_TO_ORDER_ERROR,
  };
}

export function addOrderProductSuccess(orderList) {
  return {
    type: actionTypes.ADD_TO_ORDER,
    orderList,
  };
}

export function addOrderProduct(product, mongoUser) {
  return async (dispatch) => {
    try {
      // eslint-disable-next-line no-underscore-dangle
      const productId = product._id.toString();
      const newOrderProduct = await axios.patch(
        `${userURL}${mongoUser._id.toString()}`,
        { _id: productId },
      );
      dispatch(addOrderProductSuccess(newOrderProduct.data.saved));
    } catch (error) {
      dispatch(addOrderProductError(error));
    }
  };
}

export function deleteOrderProductError(error) {
  return {
    error,
    type: actionTypes.DELETE_FROM_ORDER_ERROR,
  };
}

export function deleteOrderProductSuccess(orderList) {
  return {
    type: actionTypes.DELETE_FROM_ORDER,
    orderList,
  };
}

export function deleteOrderProduct(product, mongoUser) {
  return async (dispatch) => {
    try {
      // eslint-disable-next-line no-underscore-dangle
      const productId = product._id.toString();
      const newOrderProduct = await axios.delete(
        `${userURL}${mongoUser._id.toString()}`,
        { data: { _id: productId } },
      );
      dispatch(deleteOrderProductSuccess(newOrderProduct.data.saved));
    } catch (error) {
      dispatch(deleteOrderProductError(error));
    }
  };
}
