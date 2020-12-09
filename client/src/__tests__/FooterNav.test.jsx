import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';
import '@react-navigation/native';
import FooterNav from '../components/FooterNav/FooterNav';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    navigate: mockedNavigate,
  }),
}));

describe('FooterNav component', () => {
  test('should render the element FooterNav', () => {
    const { getByTestId } = render(<FooterNav orderSize={0} />);

    expect(getByTestId('FooterNav')).toBeDefined();
  });

  test('test onPress functionality', async () => {
    const { getByTestId } = render(<FooterNav orderSize={0} />);

    const button = getByTestId('orderButton');

    await fireEvent.press(button);

    expect(mockedNavigate).toHaveBeenCalled();
  });
});
