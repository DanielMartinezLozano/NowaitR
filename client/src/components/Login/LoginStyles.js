import { StyleSheet } from 'react-native';
import stylesType from '../../../styles/stylesType';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: stylesType.gray,
  },
  button: {
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
});

export default styles;
