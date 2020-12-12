import React, { useEffect, useState } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';
import {
  Text, View, Button, StyleSheet, StatusBar, Alert,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './QRcodeStyles';

function QRcode({ navigation, user }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    Alert.alert(
      `Estás en la mesa ${data.replace('Table ', '')}`,
      'Ya puedes hacer tu pedido',
      [
        { text: '¡Allá voy!', onPress: () => {} },
      ],
      { cancelable: false },
    );
    navigation.navigate('categories');
  };

  if (hasPermission === null) {
    return <Text />;
  }
  if (hasPermission === false) {
    return (
      <View style={styles.noCameraContainer}>
        <StatusBar barStyle="dark-content" />
        <Text style={styles.noCameraAlert}>
          Para escanear el código QR de tu mesa necesitas activar el acceso a la cámara a NowaitR.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.wrapper}>
      <StatusBar barStyle="dark-content" />
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      <View style={styles.welcome}>
        <Text style={styles.welcomeText}>{`¡Hola ${user?.name}!`}</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.square} />
        <Text style={styles.instructions}>
          Enfoca el código QR de la mesa para ver el menú y hacer tu pedido
        </Text>
        {scanned && <Button title="Clica para volver a escanear" onPress={() => setScanned(false)} />}
      </View>
    </View>
  );
}

QRcode.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  user: PropTypes.shape({
    name: PropTypes.string,
  }),
};

QRcode.defaultProps = {
  user: {},
};

function mapStateToProps({ authReducer }) {
  return {
    user: authReducer.user,
  };
}

export default connect(mapStateToProps)(QRcode);
