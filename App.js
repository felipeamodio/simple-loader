import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Loader from './src/components/Loader/index';

export default function App() {
  return (
    <View style={styles.container}>
      <Loader />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C2C2C',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
