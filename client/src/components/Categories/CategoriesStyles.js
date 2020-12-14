import { StyleSheet } from 'react-native';
import stylesType from '../../../styles/stylesType';

const CategoriesStyles = StyleSheet.create({
  container: {
    height: '100%',
  },
  image: {
    height: 150,
  },
  imageBackground: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.7)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 3,
    padding: 20,
  },
  subtitle: {
    fontSize: 18,
    color: stylesType.black,
    margin: 15,
    fontWeight: '600',
  },
  categories: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 5,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  category: {
    flex: 1,
    resizeMode: 'cover',
    textAlignVertical: 'center',
    textAlign: 'center',
    margin: 5,
    height: 160,
    shadowColor: '#000',
    shadowOffset: {
      height: 1,
      width: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    borderRadius: 5,
  },
  touchable: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  categoryName: {
    display: 'flex',
    fontSize: 22,
    fontWeight: '700',
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: -1, height: 0.6 },
    textShadowRadius: 3,
  },
  categoryBackground: {
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
});

export default CategoriesStyles;
