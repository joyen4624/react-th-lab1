import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// MSSV 2124802010151 - Lê Sỹ Hoài

interface SquareProps {
  text: string;
  bgColor?: string;
}

const Square: React.FC<SquareProps> = ({ text, bgColor = '#7ce0f9' }) => (
  <View style={[styles.box, { backgroundColor: bgColor }]}>
    <Text style={styles.text}>{text}</Text>
  </View>
);

const Lab5 = () => {
  return (
    <View style={styles.container}>
      <Square text="Square 1" />
      <Square text="Square 2" bgColor="#4dc2c2" />
      <Square text="Square 3" bgColor="#ff637c" />
    </View>
  );
};

export default Lab5;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    alignItems: 'center', 
    backgroundColor: '#fff',
  },
  box: {
    width: 100,
    height: 100,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10, 
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
