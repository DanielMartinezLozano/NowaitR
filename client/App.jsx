import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import firebase from 'firebase';
import firebaseConfig from './config';
import configureStore from './src/redux/configureStore';
import Categories from './src/components/Categories/Categories';
import Products from './src/components/Products/Products';
import HeaderLogo from './src/components/HeaderLogo/HeaderLogo';
import Order from './src/components/Order/Order';
import Login from './src/components/Login/Login';

try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    throw ('Firebase initialization error', err.stack);
  }
}

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
          <Stack.Screen name="login" component={Login} options={header} />
          <Stack.Screen name="categories" component={Categories} options={header} />
          <Stack.Screen name="products" component={Products} options={header} />
          <Stack.Screen name="order" component={Order} options={header} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
