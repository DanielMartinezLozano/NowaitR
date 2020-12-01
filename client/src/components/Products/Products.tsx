/* eslint-disable max-lines-per-function */
/* eslint-disable react/jsx-no-bind */
import React, { useEffect } from 'react'
import { StyleSheet, View, Text, FlatList, Image } from 'react-native'
import { connect } from 'react-redux'
import stylesType from '../../../styles/stylesType'
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
          <Text style={styles.title}>
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
          <View style={styles.container}>
              {products && products.length &&
              <FlatList
                  data={products}
                  keyExtractor={(item: Product) => item.name}
                  renderItem={({ item }) => (
                      <View style={styles.productView}>
                          <View style={styles.imageContainer}>
                              <Image
                                  source={{ uri: item.img }}
                                  style={styles.image}
                              />
                          </View>
                          <Text style={styles.productTitle}>
                              {item.name}
                          </Text>
                          <Text style={styles.price}>
                              {item.price.toFixed(2)}
                              {' '}
                              €
                          </Text>
                      </View>
                  )}
              />}
          </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
  },
  productView: {
    borderWidth: 1,
    borderColor: stylesType.black,
    width: '45%',
    padding: 30
  },
  list: {
    display: 'flex',
    flexDirection: 'row'
  },
  item: {
    backgroundColor: '#202020',
    margin: 10
  },
  title: {
    color: stylesType.black,
    fontSize: 32,
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 42,
    padding: 30
  },
  productTitle: {
    color: stylesType.black,
    fontSize: 16,
    fontWeight: 'bold'
  },
  price: {
    color: '#CD3B3B'
  },
  imageContainer: {
    height: 100,
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: -10
  },
  image: {
    position: 'relative',
    resizeMode: 'contain',
    height: 100
  }
})

function mapStateToProps ({ productsReducer }) {
  return {
    products: productsReducer.productsList
  }
}

export default connect(mapStateToProps)(Products)
