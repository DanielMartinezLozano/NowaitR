import stylesType from '../../../styles/stylesType';

const NoQRStyles = {
  container: {
    width: '100%',
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    margin: 30,
    fontSize: 22,
    fontWeight: '600',
    color: stylesType.black,
  },
  button: {
    flex: 1,
    width: 150,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    padding: 5,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
  tableImage: {
    width: 45,
    height: 45,
  },
  tableText: {
    margin: 10,
    fontSize: 18,
  },
  submitButtonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButton: {
    margin: 40,
    padding: 16,
    width: 200,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: stylesType.brown,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
  submitButtonText: {
    fontWeight: '700',
    fontSize: 16,
    color: 'white',
  },
};

export default NoQRStyles;
