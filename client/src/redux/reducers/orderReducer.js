import actionTypes from '../actions/action-types';

const initialState = { orderList: [], orderSize: 0 };

export default function orderReducer(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.LOAD_ORDER_PRODUCTS:
      return {
        ...state,
        sentList: [...action.sentList],
        orderList: [...action.orderList],
        orderSize: action.orderList.reduce((acc, cur) => acc + cur.quantity, 0),
      };

    case actionTypes.ADD_TO_ORDER:
      return {
        ...state,
        orderList: [...action.orderList],
        orderSize: action.orderList.reduce((acc, cur) => acc + cur.quantity, 0),
      };

    case actionTypes.DELETE_FROM_ORDER:
      return {
        ...state,
        orderList: [...action.orderList],
        orderSize: action.orderList.reduce((acc, cur) => acc + cur.quantity, 0),
      };

    default:
      return state;
  }
}
