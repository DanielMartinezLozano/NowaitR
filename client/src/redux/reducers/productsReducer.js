/* eslint-disable default-param-last */
import actionTypes from '../actions/action-types';

const initialState = {};

export default function productsReducer(state = initialState, action = {}) {
  if (action.type === actionTypes.LOAD_PRODUCTS) {
    return {
      ...state,
      productsList: action.productsList,
    };
  }
  return state;
}
