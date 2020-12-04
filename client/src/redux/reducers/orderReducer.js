import actionTypes from '../actions/action-types';

const initialState = { orderList: [], orderSize: 0 };

export default function orderReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOAD_ORDER_PRODUCTS:
      return {
        ...state,
        orderList: [...action.orderList],
        orderSize: action.orderList.reduce((acc, cur) => acc + cur.quantity, 0),
      };

    default:
      return state;
  }
}
