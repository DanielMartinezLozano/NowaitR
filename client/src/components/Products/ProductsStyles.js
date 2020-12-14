import { StyleSheet } from 'react-native';
import stylesType from '../../../styles/stylesType';

const ProductsStyles = StyleSheet.create({
  body: {
    display: 'flex',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'column',
    margin: 0,
    height: 'auto',
    width: '100%',
    flexGrow: 1,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 'auto',
    flexGrow: 1,
    flex: 1,
    margin: 0,
  },
  productView: {
    display: 'flex',
    flexDirection: 'column',
    width: '47%',
    margin: 5,
    padding: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    backgroundColor: '#FFF',
  },
  list: {
    display: 'flex',
    flexDirection: 'row',
  },
  item: {
    backgroundColor: '#202020',
    margin: 10,
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    width: '100%',
  },
  titleText: {
    fontSize: 24,
    color: stylesType.black,
    fontWeight: 'bold',
    paddingLeft: 20,
  },
  productTitleContainer: {
    display: 'flex',
    width: '100%',
    height: 40,
  },
  productTitle: {
    color: stylesType.black,
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    color: '#CD3B3B',
  },
  imageContainer: {
    height: 100,
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: -10,
  },
  image: {
    position: 'relative',
    resizeMode: 'contain',
    height: 100,
    backgroundColor: 'white',
  },
  heartIconPresseable: {
    position: 'absolute',
    top: 0,
    left: -10,
  },
  heartIcon: {
    width: 30,
    height: 30,
    opacity: 0.9,
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  button: {
    backgroundColor: stylesType.brown,
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
    margin: 10,
  },
  quantity: {
    fontSize: 30,
  },
});

export default ProductsStyles;
