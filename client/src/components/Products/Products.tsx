/* eslint-disable react/jsx-no-bind */
import React, { useEffect } from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'
import { ListItem } from 'react-native-elements'
import { connect } from 'react-redux'
import styles from '../../../styles/styles'
import Icon from 'react-native-vector-icons/Feather'
import { loadProductList } from '../../redux/actions/productsActions'

interface Props {
  products: Product[],
  dispatch: Function
}

interface Product {
  name: string,
  category: string,
  price: number,
  img: string
}

function Products ({ products, dispatch }: Props) {
  useEffect(
    () => {
      if (!products || !products.length) {
        dispatch(loadProductList())
      }
    },
    []
  )

  return (
      <View>
          <Text style={style.title}>
              {' '}
              <Icon
                  name="arrow-left-circle"
                  size={32}
              />
              {' '}
              <Text>
                  Products
              </Text>
          </Text>
          <View style={style.container}>
              {products && products.length &&
              <FlatList
                  data={products}
                  keyExtractor={(item: Product) => item.name}
                  renderItem={({ item }) => (
                      <View style={style.productView}>
                          <Text>
                              {item.name}
                          </Text>
                      </View>
                  )}
              />}
          </View>
      </View>
  )
}

const style = StyleSheet.create({
  container: {
  },
  productView: {
    borderWidth: 1,
    borderColor: styles.black,
    width: '40%',
    padding: 30
  },
  list: {
    display: 'flex',
    flexDirection: 'row'
  },
  item: {
    backgroundColor: '#202020',
    margin: 10,
    width: '30%'
  },
  title: {
    color: styles.black,
    fontSize: 32,
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 42,
    padding: 30
  },
  name: {
    color: styles.black
  }
})

function mapStateToProps ({ productsReducer }) {
  return {
    products: productsReducer.productsList
  }
}

export default connect(mapStateToProps)(Products)
