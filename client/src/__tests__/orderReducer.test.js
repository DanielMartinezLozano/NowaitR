import orderReducer from '../redux/reducers/orderReducer';
import actionTypes from '../redux/actions/action-types';

describe('orderReducer', () => {
  test('action.type load order products without action', () => {
    expect(orderReducer(...Array(1)))
      .toEqual({ orderList: [], orderSize: 0 });
  });

  test('action.type load order products should return product list and order size', () => {
    const action = {
      type: actionTypes.LOAD_ORDER_PRODUCTS,
      orderList: [{ quantity: 3 }],
      orderSize: 3,
      sentList: [],
    };
    expect(orderReducer(...Array(1), action))
      .toEqual({ orderList: [{ quantity: 3 }], orderSize: 3, sentList: [] });
  });

  test('action.type add to order products should return product list and order size', () => {
    const action = {
      type: actionTypes.ADD_TO_ORDER, orderList: [{ quantity: 3 }], orderSize: 3,
    };
    expect(orderReducer(...Array(1), action))
      .toEqual({ orderList: [{ quantity: 3 }], orderSize: 3 });
  });

  test('action.type delete from order products should return product list and order size', () => {
    const action = {
      type: actionTypes.DELETE_FROM_ORDER, orderList: [{ quantity: 3 }], orderSize: 3,
    };
    expect(orderReducer(...Array(1), action))
      .toEqual({ orderList: [{ quantity: 3 }], orderSize: 3 });
  });

  test('action.type load products should return state default', () => {
    const initialState = {};
    const action = { type: null, orderList: [] };
    expect(orderReducer(initialState, action)).toEqual({ });
  });
});
