import stylesType from '../../../styles/stylesType';

const FooterNavStyles = {
  container: {
    backgroundColor: stylesType.gray,
    display: 'flex',
    flexDirection: 'row',
    height: 70,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  productsContainer: {
    paddingTop: 10,
    alignItems: 'center',
    flex: 1,
  },
  products: {
    fontSize: 16,
  },
  waiterContainer: {
    backgroundColor: stylesType.brown,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    bottom: 30,
    height: 100,
    width: 100,
    borderRadius: 60,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  favContainer: {
    paddingTop: 10,
    flex: 1,
  },
  favTouchable: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  icon: {
    height: 50,
    width: 50,
  },
  badgeStyle: {
    backgroundColor: stylesType.blue,
    borderColor: 'transparent',
    height: 35,
    width: 35,
    borderRadius: 17,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
  badgeTextStyle: {
    color: stylesType.black,
  },
};

export default FooterNavStyles;
