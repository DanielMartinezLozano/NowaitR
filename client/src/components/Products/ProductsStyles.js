import { StyleSheet } from 'react-native';
import stylesType from '../../../styles/stylesType';

const styles = StyleSheet.create({
  body: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    margin: 0,
    height: 'auto',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 'auto',
    flexGrow: 1,
    flex: 1,
    margin: 10,
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
    color: stylesType.black,
    fontSize: 32,
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 42,
    padding: 30,
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

export default styles;
