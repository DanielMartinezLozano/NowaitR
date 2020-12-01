// import actionTypes from '../actions/action-types';

import actionTypes from '../actions/action-types'

const initialState = {}
// let productTypes;

export default function productsReducer (state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOAD_PRODUCTS:
      return {
        ...state,
        productsList: action.productsList
      }
    default:
      return state
  }
}
