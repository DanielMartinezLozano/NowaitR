import React from 'react';
import { render } from '@testing-library/react-native';
import Loading from '../../components/Loading/Loading';

describe('Loading component', () => {
  test('should render loading container', () => {
    const { getByTestId } = render(<Loading />);

    expect(getByTestId('Loading')).toBeDefined();
  });
});
