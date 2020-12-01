import React from 'react'
import { Provider } from 'react-redux'
import HeaderLogo from './src/components/HeaderLogo/HeaderLogo'
import Products from './src/components/Products/Products'
import configureStore from './src/redux/configureStore'

const store = configureStore()
// en daniel es posa nervios
export default function App () {
  return (
    <Provider store={store}>
      <HeaderLogo />
      <Products/>
    </Provider>
  )
}
