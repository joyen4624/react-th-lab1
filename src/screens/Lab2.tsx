import React from 'react';
import { View, Button, Alert, StyleSheet } from 'react-native';

// MSSV 2124802010151 - Lê Sỹ Hoài

const Lab2 = () => {
  const handlePress = () => {
    Alert.alert('Xin chào từ Lab 2!');
  };

  return (
    <View style={styles.container}>
      <Button title="Nhấn vào tôi" onPress={handlePress} />
    </View>
  );
};

export default Lab2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
