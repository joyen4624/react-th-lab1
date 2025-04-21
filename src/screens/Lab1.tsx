import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// MSSV 2124802010151 - Lê Sỹ Hoài

const Lab1 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>👋 Hello World!</Text>
    </View>
  );
};

export default Lab1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
  },
});
