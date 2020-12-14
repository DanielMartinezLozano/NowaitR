import { StyleSheet } from 'react-native';
import stylesType from '../../../styles/stylesType';

const LoginStyles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: stylesType.gray,
  },
  title: {
    color: 'white',
    fontSize: 46,
    fontWeight: '600',
    marginTop: 120,
    textShadowColor: 'rgba(0, 0, 0, 0.7)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 3,
  },
  subtitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '400',
    margin: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.7)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 3,
  },
  button: {
    marginTop: 80,
    borderRadius: 10,
    padding: 10,
    width: '70%',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  buttonContainer: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
  },
  buttonView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: 'rgb(82, 133, 236)',
    fontSize: 18,
    fontWeight: '600',
    paddingLeft: 10,
  },
  owner: {
    color: 'white',
    fontSize: 16,
    fontWeight: '400',
    margin: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.7)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 3,
    textDecorationLine: 'underline',
  },
  logo: {
    position: 'absolute',
    width: 200,
    height: 200,
    bottom: 0,
    zIndex: 100,
    borderRadius: 100,
  },
  footer: {
    position: 'absolute',
    bottom: -300,
    borderRadius: 250,
    width: 500,
    height: 500,
    backgroundColor: stylesType.yellow,
  },
  loading: {
    zIndex: 10000,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});

export default LoginStyles;
