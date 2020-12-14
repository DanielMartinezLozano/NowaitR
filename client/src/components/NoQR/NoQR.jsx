import React, { useState } from 'react';
import {
  FlatList, Text, View, TouchableOpacity, Image,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import stylesType from '../../../styles/stylesType';
import styles from './NoQRStyles';
import { addTableNum } from '../../redux/actions/userActions';

function NoQR({ navigation, dispatch, user }) {
  const [hasTable, setHasTable] = useState(false);
  const [itemPressed, setItemPressed] = useState(null);

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={(
          <Text style={styles.title}>¿Qué número tiene tu mesa?</Text>
    )}
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        horizontal={false}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        // eslint-disable-next-line no-unused-vars
        keyExtractor={(item, _index) => item}
        renderItem={({ item }) => (
          <View style={styles.productView}>
            <TouchableOpacity
              style={{ ...styles.button, backgroundColor: itemPressed?.item === item ? stylesType.blue : 'white' }}
              onPress={() => {
                setItemPressed({ item });
                setHasTable(true);
              }}
            >
              <Image
                source={{ uri: 'https://trello-attachments.s3.amazonaws.com/5fc4dc9893cb2246bcf25278/5fc4e2ccad234f1c1cdcdb7a/f8e818823c18560b1a7e406a2258faf8/icons8-restaurant-table-100.png' }}
                style={styles.tableImage}
              />
              <Text style={styles.tableText}>{`Mesa ${item}`}</Text>
            </TouchableOpacity>
          </View>
        )}
        ListFooterComponent={(
          <View style={styles.submitButtonContainer}>
            <TouchableOpacity
              style={{ ...styles.submitButton, backgroundColor: (hasTable ? stylesType.brown : 'gray') }}
              onPress={() => {
                dispatch(addTableNum(itemPressed.item, user));
                navigation.reset({ index: 0, routes: [{ name: 'categories' }] });
              }}
              disabled={!hasTable}
            >
              <Text style={styles.submitButtonText}>Comenzar mi pedido</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

NoQR.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.shape({}),
};

NoQR.defaultProps = {
  user: {},
};

function mapStateToProps({
  authReducer,
}) {
  return {
    user: authReducer.user,
  };
}

export default connect(mapStateToProps)(NoQR);
