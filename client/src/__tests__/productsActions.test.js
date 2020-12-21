import axios from 'axios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import {
  addFavProduct,
  addOrderProduct, clearOrder, deleteOrderProduct, loadFavProductsList,
  loadOrderProductsList, loadProductList, removeFavProduct, sendOrder,
} from '../redux/actions/productsActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore();

jest.mock('axios');

describe('productsActions test', () => {
  describe('loadProductList', () => {
    test('loadProductList should call axios.get and resolve', async () => {
      axios.get.mockImplementationOnce(() => Promise.resolve({ data: null }));
      await store.dispatch(loadProductList());
      expect(axios.get).toHaveBeenCalled();
    });

    test('loadProductList should call axios.get and reject with error', async () => {
      axios.get.mockImplementationOnce(() => Promise.reject(Error));
      await store.dispatch(loadProductList());
      expect(axios.get).toHaveBeenCalled();
    });
  });

  describe('loadOrderProductsList', () => {
    test('loadOrderProductsList should call axios.get and resolve', async () => {
      axios.get.mockImplementationOnce(() => Promise.resolve({ data: { saved: null } }));
      const user = { _id: 1 };
      await store.dispatch(loadOrderProductsList(user));
      expect(axios.get).toHaveBeenCalled();
    });

    test('loadOrderProductsList should call axios.get and reject with error', async () => {
      axios.get.mockImplementationOnce(() => Promise.reject(Error));
      await store.dispatch(loadOrderProductsList());
      expect(axios.get).toHaveBeenCalled();
    });
  });

  describe('addOrderProduct', () => {
    test('addOrderProduct should call axios.patch and resolve', async () => {
      axios.patch.mockImplementationOnce(() => Promise.resolve({ data: { saved: null } }));
      const product = { _id: 1 };
      const user = {};
      await store.dispatch(addOrderProduct(product, user));
      expect(axios.patch).toHaveBeenCalled();
    });

    test('addOrderProduct should call axios.patch and reject', async () => {
      axios.patch.mockImplementationOnce(() => Promise.resolve(Error));
      const product = { _id: 1 };
      const user = {};
      await store.dispatch(addOrderProduct(product, user));
      expect(axios.patch).toHaveBeenCalled();
    });
  });

  describe('deleteOrderProduct', () => {
    test('deleteOrderProduct should call axios.delete and resolve', async () => {
      axios.delete.mockImplementationOnce(() => Promise.resolve({ data: { saved: null } }));
      const product = { _id: 1 };
      const user = {};
      await store.dispatch(deleteOrderProduct(product, user));
      expect(axios.delete).toHaveBeenCalled();
    });

    test('deleteOrderProduct should call axios.delete and reject', async () => {
      axios.delete.mockImplementationOnce(() => Promise.resolve(Error));
      const product = { _id: 1 };
      const user = {};
      await store.dispatch(deleteOrderProduct(product, user));
      expect(axios.delete).toHaveBeenCalled();
    });
  });

  describe('loadFavProductsList', () => {
    test('loadFavProductsList should call axios.get and resolve', async () => {
      axios.get.mockImplementationOnce(() => Promise.resolve({ data: null }));
      const mongoUser = { id: 1 };
      await store.dispatch(loadFavProductsList(mongoUser));
      expect(axios.get).toHaveBeenCalled();
    });

    test('loadFavProductsList should call axios.get and reject with error', async () => {
      axios.get.mockImplementationOnce(() => Promise.reject(Error));
      const mongoUser = { id: 1 };
      await store.dispatch(loadFavProductsList(mongoUser));
      expect(axios.get).toHaveBeenCalled();
    });
  });

  describe('addFavProduct', () => {
    test('addFavProduct should call axios.patch and resolve', async () => {
      axios.patch.mockImplementationOnce(() => Promise.resolve({ data: { favs: null } }));
      const product = { _id: 1 };
      const user = {};
      await store.dispatch(addFavProduct(product, user));
      expect(axios.patch).toHaveBeenCalled();
    });

    test('addFavProduct should call axios.patch and reject', async () => {
      axios.patch.mockImplementationOnce(() => Promise.resolve(Error));
      const product = { _id: 1 };
      const user = {};
      await store.dispatch(addFavProduct(product, user));
      expect(axios.patch).toHaveBeenCalled();
    });
  });

  describe('removeFavProduct', () => {
    test('removeFavProduct should call axios.delete and resolve', async () => {
      axios.delete.mockImplementationOnce(() => Promise.resolve({ data: { favs: [] } }));
      const product = { _id: 1 };
      const user = { _id: 1 };
      await store.dispatch(removeFavProduct(product, user));
      expect(axios.delete).toHaveBeenCalled();
    });

    test('removeFavProduct should call axios.delete and reject', async () => {
      axios.delete.mockImplementationOnce(() => Promise.resolve(Error));
      const product = { _id: 1 };
      const user = {};
      await store.dispatch(removeFavProduct(product, user));
      expect(axios.delete).toHaveBeenCalled();
    });
  });

  describe('sendOrder', () => {
    test('sendOrder should call axios.put and resolve', async () => {
      axios.put.mockImplementationOnce(() => Promise.resolve({ data: null }));
      const user = {};
      await store.dispatch(sendOrder(user));
      expect(axios.put).toHaveBeenCalled();
    });

    test('sendOrder should call axios.put and reject with error', async () => {
      axios.put.mockImplementationOnce(() => Promise.reject(Error));
      const user = {};
      await store.dispatch(sendOrder(user));
      expect(axios.put).toHaveBeenCalled();
    });
  });

  describe('clearOrder', () => {
    test('clearOrder should call axios.delete and resolve', async () => {
      axios.delete.mockImplementationOnce(() => Promise.resolve({ data: null }));
      const user = {};
      await store.dispatch(clearOrder(user));
      expect(axios.delete).toHaveBeenCalled();
    });

    test('clearOrder should call axios.delete and reject with error', async () => {
      axios.delete.mockImplementationOnce(() => Promise.reject(Error));
      await store.dispatch(clearOrder());
      expect(axios.delete).toHaveBeenCalled();
    });
  });
});
