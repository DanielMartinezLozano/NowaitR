import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  body: {
  },
  image: {
    width: '100%',
    height: 150,
  },
  categories: {
    display: 'flex',
    flexDirection: 'column',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    marginTop: 20,
  },
  category: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
    margin: 5,
  },
  categoryName: {
    display: 'flex',
    flex: 1,
    paddingTop: 30,
    paddingBottom: 30,
  },
});

export default styles;
