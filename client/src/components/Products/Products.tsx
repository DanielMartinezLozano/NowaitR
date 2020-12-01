import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import styles from '../../../styles/styles'
import Icon from 'react-native-vector-icons/Feather'

function Products ({ products }) {
  return (
    <View >
      <Text style={style.title}> <Icon name="arrow-left-circle" size={32}/>  Products</Text>
    </View>
  )
}

const style = StyleSheet.create({
  title: {
    color: styles.black,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 32,
    lineHeight: 42,
    padding: 30
  }
})

Products.propTypes = {
  products: propTypes.shape({})
}

function mapStateToProps ({ productsReducer }) {
  return {
    products: productsReducer
  }
}

function mapDispatchToProps (dispatch) {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
