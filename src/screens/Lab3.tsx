// App.tsx
import React from 'react';
import { View, Alert, StyleSheet } from 'react-native';
import CustomButton from '../component/CustomButton'; 

// MSSV 2124802010151 - Lê Sỹ Hoài

export default function App() {
  const showAlert = () => {
    Alert.alert('Hello from custom button!');
  };

  return (
    <View style={styles.container}>
      <CustomButton
        text="Nhấn vào!"
        onPress={showAlert}
        buttonStyle={{ backgroundColor: 'tomato' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
