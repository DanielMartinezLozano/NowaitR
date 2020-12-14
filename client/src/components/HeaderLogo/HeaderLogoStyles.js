import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import stylesType from '../../../styles/stylesType';

const HeaderLogoStyles = StyleSheet.create({
  container: {
    backgroundColor: stylesType.yellow,
    elevation: 2,
    paddingTop: getStatusBarHeight(true),
    paddingBottom: 0,
    height: 80,
    shadowColor: '#000',
    shadowOffset: {
      height: 1,
      width: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  logo: {
    height: 28,
    width: 180,
    margin: 0,
    marginTop: 5,
  },
  logout: {
    height: 30,
    width: 30,
    padding: 0,
    marginTop: 5,
    opacity: 0.9,
  },
});

export default HeaderLogoStyles;
