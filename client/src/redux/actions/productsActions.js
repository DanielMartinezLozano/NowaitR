import axios from 'axios';
import actionTypes from './action-types';
import endpoints from './endpoints';

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

export function loadProductList(category) {
  return async (dispatch) => {
    try {
      const productsList = await axios.get(`${endpoints.productsURL}${category}`);
      dispatch(loadProductsSuccess(productsList.data));
    } catch (error) {
      dispatch(loadProductsError(error));
    }
  };
}

export function loadOrderProductsSuccess(orderList, sentList) {
  return {
    orderList,
    sentList,
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
      const user = await axios.get(`${endpoints.authURL}${mongoUser.id}`);
      const orderList = user.data.saved;
      const sentList = user.data.sent;

      dispatch(loadOrderProductsSuccess(orderList, sentList));
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

export function addOrderProduct(product, user) {
  return async (dispatch) => {
    try {
      // eslint-disable-next-line no-underscore-dangle
      const productId = product._id.toString();
      const newOrderProduct = await axios.patch(
        `${endpoints.userURL}${user.id}`,
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
        `${endpoints.userURL}${mongoUser.id}`,
        { data: { _id: productId } },
      );
      dispatch(deleteOrderProductSuccess(newOrderProduct.data.saved));
    } catch (error) {
      dispatch(deleteOrderProductError(error));
    }
  };
}

export function loadFavProductsSuccess(favList) {
  return {
    favList,
    type: actionTypes.LOAD_FAV_PRODUCTS,
  };
}

export function loadFavProductsError(error) {
  return {
    error,
    type: actionTypes.LOAD_FAV_PRODUCTS_ERROR,
  };
}

export function loadFavProductsList(mongoUser) {
  return async (dispatch) => {
    try {
      const user = await axios.get(`${endpoints.userFavURL}${mongoUser.id}`);
      const favList = user.data;
      dispatch(loadFavProductsSuccess(favList));
    } catch (error) {
      dispatch(loadFavProductsError(error));
    }
  };
}

export function addFavProductError(error) {
  return {
    error,
    type: actionTypes.ADD_TO_FAVS_ERROR,
  };
}

export function addFavProductSuccess(favList) {
  return {
    type: actionTypes.ADD_TO_FAVS,
    favList,
  };
}

export function addFavProduct(product, user) {
  return async (dispatch) => {
    try {
      // eslint-disable-next-line no-underscore-dangle
      const productId = product._id.toString();
      const newFavProduct = await axios.patch(
        `${endpoints.userFavURL}${user.id}`,
        { _id: productId },
      );
      dispatch(addFavProductSuccess(newFavProduct.data.favs));
    } catch (error) {
      dispatch(addFavProductError(error));
    }
  };
}

export function removeFavProductError(error) {
  return {
    error,
    type: actionTypes.REMOVE_FROM_FAVS_ERROR,
  };
}

export function removeFavProductSuccess(favList) {
  return {
    type: actionTypes.REMOVE_FROM_FAVS,
    favList,
  };
}

export function removeFavProduct(product, user) {
  return async (dispatch) => {
    try {
      // eslint-disable-next-line no-underscore-dangle
      const productId = product._id.toString();
      const updatedFavList = await axios.delete(
        `${endpoints.userFavURL}${user._id.toString()}`,
        { data: { _id: productId } },
      );
      dispatch(removeFavProductSuccess(updatedFavList.data.favs));
    } catch (error) {
      dispatch(removeFavProductError(error));
    }
  };
}

export function sendOrderError(error) {
  return {
    error,
    type: actionTypes.SEND_ORDER_ERROR,
  };
}

export function sendOrderSuccess(user) {
  return {
    type: actionTypes.SEND_ORDER,
    user,
  };
}

export function sendOrder(user) {
  return async (dispatch) => {
    try {
      const updatedUser = await axios.put(`${endpoints.orderURL}${user.id}`);
      dispatch(sendOrderSuccess(updatedUser.data));
    } catch (error) {
      dispatch(sendOrderError(error));
    }
  };
}

export function clearOrderError(error) {
  return {
    error,
    type: actionTypes.CLEAR_ORDER_ERROR,
  };
}

export function clearOrderSuccess(user) {
  return {
    type: actionTypes.CLEAR_ORDER,
    user,
  };
}

export function clearOrder(user) {
  return async (dispatch) => {
    try {
      const updatedUser = await axios.delete(`${endpoints.orderURL}${user.id}`);
      dispatch(clearOrderSuccess(updatedUser.data));
    } catch (error) {
      dispatch(clearOrderError(error));
    }
  };
}
