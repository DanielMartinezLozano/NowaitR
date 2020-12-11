import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import firebase from 'firebase';
import HeaderLogo from '../../components/HeaderLogo/HeaderLogo';

jest.mock('firebase');

describe('HeaderLogo Component', () => {
  test('should render the element HeaderLogo', () => {
    const { getByTestId } = render(<HeaderLogo />);

    expect(getByTestId('HeaderLogo')).toBeDefined();
  });

  test('test onPress functionality', async () => {
    firebase.auth = jest.fn().mockImplementation(() => ({ signOut: jest.fn() }));

    const { getByTestId } = render(<HeaderLogo />);

    const button = getByTestId('signOutButton');

    await fireEvent.press(button);

    expect(firebase.auth).toHaveBeenCalled();
  });
});
