import { StyleSheet } from 'react-native';
import stylesType from '../../../styles/stylesType';

const LoadingStyles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: stylesType.yellow,
  },
});

export default LoadingStyles;
