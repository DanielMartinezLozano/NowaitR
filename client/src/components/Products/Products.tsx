/* eslint-disable react/jsx-max-depth */
/* eslint-disable max-lines-per-function */
/* eslint-disable react/jsx-no-bind */
import React, { useEffect } from 'react'
import { StyleSheet, View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
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
      <View style={styles.body}>
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
                  horizontal={false}
                  keyExtractor={(item: Product) => item.name}
                  numColumns={2}
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
                          <View style={styles.buttons}>
                              <TouchableOpacity
                                  style={styles.button}
                              >
                                  <Icon
                                      color="#FFF"
                                      name="minus"
                                      size={30}
                                  />
                              </TouchableOpacity>
                              <Text style={styles.quantity}>
                                  0
                              </Text>
                              <TouchableOpacity
                                  style={styles.button}
                              >
                                  <Icon
                                      color="#FFF"
                                      name="plus"
                                      size={30}
                                  />
                              </TouchableOpacity>
                          </View>
                      </View>
                  )}
              />}
          </View>
      </View>
  )
}

const styles = StyleSheet.create({
  body: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    margin: 0,
    height: 'auto'
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 'auto',
    flexGrow: 1,
    flex: 1,
    margin: 10
  },
  productView: {
    display: 'flex',
    flexDirection: 'column',
    width: '45%',
    margin: 5,
    padding: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    backgroundColor: '#FFF'
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
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  button: {
    backgroundColor: stylesType.brown,
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
    margin: 10
  },
  quantity: {
    fontSize: 30
  }
})

function mapStateToProps ({ productsReducer }) {
  return {
    products: productsReducer.productsList
  }
}

export default connect(mapStateToProps)(Products)
