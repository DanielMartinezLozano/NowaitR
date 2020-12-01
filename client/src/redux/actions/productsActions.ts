import axios from 'axios'
import actionTypes from './action-types'

const productsURL = 'http://localhost:4500/products'

export function loadProductsSuccess (productsList) {
  return {
    type: actionTypes.LOAD_PRODUCTS,
    productsList
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
