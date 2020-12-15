import productsReducer from '../redux/reducers/productsReducer';
import actionTypes from '../redux/actions/action-types';

describe('productsReducer', () => {
  test('action.type load products should return product list', () => {
    const action = { type: actionTypes.LOAD_PRODUCTS, productsList: [] };
    expect(productsReducer(undefined, action)).toEqual({ productsList: [] });
  });

  test('action.type load products should return state default', () => {
    const initialState = {};
    const action = { type: null, productsList: [] };
    expect(productsReducer(initialState, action)).toEqual({ });
  });

  test('action.type load products without action should return {}', () => {
    const initialState = {};
    expect(productsReducer(initialState)).toEqual({ });
  });
});
