/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Categories from '../../components/Categories/Categories';

jest.mock('@react-navigation/native');
const buildStore = configureStore([thunk]);

describe('Categories component', () => {
  let orderSize;
  const useNavigation = jest.fn();

  const wrapperFactory = (wrapperInitialState) => {
    const store = buildStore(wrapperInitialState);
    store.dispatch = jest.fn();

    return ({ children }) => (
      <Provider store={store}>
        {children}
      </Provider>
    );
  };

  test('should render categories container', () => {
    const initialState = { orderReducer: { orderSize } };
    const wrapper = wrapperFactory(initialState);
    const { getByTestId } = render(<Categories />, { wrapper });

    const response = getByTestId('categoriesContainer');
    console.log(response);

    expect(response).toBeDefined();
  });
});
