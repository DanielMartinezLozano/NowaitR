import { StyleSheet } from 'react-native';
import stylesType from '../../../styles/stylesType';

const styles = StyleSheet.create({
  container: {
    backgroundColor: stylesType.yellow,
    elevation: 2,
    height: 100,
    shadowColor: '#000',
    shadowOffset: {
      height: 1,
      width: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  logo: {
    height: 200,
    width: 200,
  },
});

export default styles;
