import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  body: {
  },
  image: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
    height: 150,
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
  categories: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 20,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  category: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover',
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
  categoryName: {
    display: 'flex',
    fontSize: 18,
    fontWeight: '700',
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: -1, height: 0.6 },
    textShadowRadius: 3,
  },
});

export default styles;
