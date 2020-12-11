/* eslint-disable react/prop-types */
import React from 'react';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Order from '../../components/Order/Order';

jest.mock('@react-navigation/native');
const buildStore = configureStore([thunk]);

describe('Order component', () => {
  const orderList = [{ product: {}, quantity: 0 }];
  let mongoUser;

  const wrapperFactory = (wrapperInitialState) => {
    const store = buildStore(wrapperInitialState);
    store.dispatch = jest.fn();

    return ({ children }) => (
      <Provider store={store}>
        {children}
      </Provider>
    );
  };

  test('should render order container', () => {
    const initialState = { orderReducer: { orderList }, authReducer: { user: mongoUser } };
    const wrapper = wrapperFactory(initialState);
    const { getByTestId } = render(<Order />, { wrapper });

    const response = getByTestId('Order');

    expect(response).toBeDefined();
  });
});
