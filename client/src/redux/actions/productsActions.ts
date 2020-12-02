import axios from 'axios'
import actionTypes from './action-types'

const productsURL = 'http://192.168.0.34:4500/products'

export function loadProductsSuccess (productsList) {
  return {
    productsList,
    type: actionTypes.LOAD_PRODUCTS
  }
}

export function loadProductList () {
  return async (dispatch) => {
    try {
      const productsList = await axios.get(productsURL)
      dispatch(loadProductsSuccess(productsList.data))
    } catch (error) {
      console.log(error)
    }
  }
}
