import { StyleSheet } from 'react-native';
import stylesType from '../../../styles/stylesType';

const QRcodeStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    position: 'absolute',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: stylesType.gray,
    top: -60,
    height: 120,
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
  welcomeText: {
    height: 45,
    fontSize: 20,
    fontWeight: '600',
    color: stylesType.black,
  },
  square: {
    marginTop: 30,
    width: 250,
    height: 250,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  instructions: {
    color: 'white',
    margin: 30,
    marginTop: 100,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    textShadowColor: 'rgba(0, 0, 0, 0.7)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 3,
  },
  noCameraContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  noCameraAlert: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    margin: 20,
  },
  problemsQR: {
    color: 'white',
    textDecorationLine: 'underline',
    textShadowColor: 'rgba(0, 0, 0, 0.7)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 3,
  },
  noAccessManually: {
    textAlign: 'center',
    color: 'black',
    textDecorationLine: 'underline',
  },
});

export default QRcodeStyles;
