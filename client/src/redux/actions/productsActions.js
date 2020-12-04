import axios from 'axios';
import actionTypes from './action-types';

const productsURL = 'http://172.20.10.4:4500/products';
const userURL = 'http://172.20.10.4:4500/users/5fc8fc5144da28d4c664b75a'; // User?

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

export function loadOrderProductsList() {
  return async (dispatch) => {
    try {
      const user = await axios.get(userURL);
      const orderList = user.data.saved;

      dispatch(loadOrderProductsSuccess(orderList));
    } catch (error) {
      dispatch(loadOrderProductsError(error));
    }
  };
}
