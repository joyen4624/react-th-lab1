// CustomButton.tsx
import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

interface Props {
  text: string;
  onPress: () => void;
  buttonStyle?: object;
}

const CustomButton: React.FC<Props> = ({ text, onPress, buttonStyle }) => {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    margin: 10,
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});

export default CustomButton;
