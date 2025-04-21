import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

// MSSV 2124802010151 - Lê Sỹ Hoài

const Lab7: React.FC = () => {
  const [name, setName] = useState("");

  const handleSayHello = () => {
    alert(`Hello, ${name}!`);
    setName(""); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>What is your name?</Text>
      <TextInput
        style={styles.input}
        placeholder="John Doe"
        placeholderTextColor="rgba(0, 0, 0, 0.5)"
        value={name}
        onChangeText={setName}
      />
      <Button
        title="Say Hello"
        onPress={handleSayHello}
      />
    </View>
  );
};

export default Lab7;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  input: {
    marginTop: 10,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
});