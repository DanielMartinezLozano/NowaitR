import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from '../redux/configureStore';
import HeaderLogo from '../components/HeaderLogo/HeaderLogo';

describe('HeaderLogo Component', () => {
  test('should be defined', () => {
    const store = configureStore({});
    store.dispatch = jest.fn();

    const headerLogo = renderer.create(
      <Provider store={store}>
        <HeaderLogo />
      </Provider>,
    );

    expect(headerLogo).toMatchSnapshot();
  });
});
