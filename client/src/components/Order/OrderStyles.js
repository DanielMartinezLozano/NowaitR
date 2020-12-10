import stylesType from '../../../styles/stylesType';

const styles = {
  titleContainer: {
    margin: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
    color: stylesType.black,

  },
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
    margin: 10,
  },
  productInfo: {
    marginLeft: 10,
  },
  productView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 10,
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
  submit: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    backgroundColor: stylesType.brown,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  submitText: {
    color: 'white',
    fontSize: 25,
    fontWeight: '600',
    marginRight: 10,
  },
  totalContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    marginBottom: 20,
    padding: 30,
    justifyContent: 'flex-end',
  },
  totalText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#202020',
    marginRight: 10,
  },
  noOrder: {
    margin: 40,
    fontSize: 16,
    color: stylesType.black,
    textAlign: 'center',
  },
  totalAmount: {
    fontSize: 20,
    fontWeight: '600',
    color: '#202020',
  },
};

export default styles;
