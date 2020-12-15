import favsReducer from '../redux/reducers/favsReducer';
import actionTypes from '../redux/actions/action-types';

describe('productsReducer', () => {
  test('action.type load fav products should return product list', () => {
    const action = { type: actionTypes.LOAD_FAV_PRODUCTS, favList: [] };
    expect(favsReducer(undefined, action)).toEqual({ favList: [] });
  });

  test('action.type add to favs should return product list', () => {
    const action = { type: actionTypes.ADD_TO_FAVS, favList: [] };
    expect(favsReducer(undefined, action)).toEqual({ favList: [] });
  });

  test('action.type remove from favs should return product list', () => {
    const action = { type: actionTypes.REMOVE_FROM_FAVS, favList: [] };
    expect(favsReducer(undefined, action)).toEqual({ favList: [] });
  });

  test('action.type null should return state default', () => {
    const initialState = {};
    const action = { type: null, productsList: [] };
    expect(favsReducer(initialState, action)).toEqual({ });
  });

  test('action.type null should return state default', () => {
    const initialState = {};
    expect(favsReducer(initialState)).toEqual({ });
  });
});
