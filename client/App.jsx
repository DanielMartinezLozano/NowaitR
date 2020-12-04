import React from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import configureStore from './src/redux/configureStore';
import Products from './src/components/Products/Products';
import HeaderLogo from './src/components/HeaderLogo/HeaderLogo';
import Order from './src/components/Order/Order';

const store = configureStore();
const Stack = createStackNavigator();

const header = {
  header: () => <HeaderLogo />,
};

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="products" component={Products} options={header} />
          <Stack.Screen name="order" component={Order} options={header} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
