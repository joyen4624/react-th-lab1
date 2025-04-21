import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

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

const Lab6 = () => {
  const data = Array.from({ length: 20 }, (_, i) => i + 1); 

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {data.map((item) => (
        <Square key={item} text={`Square ${item}`} bgColor={randomColor(item)} />
      ))}
    </ScrollView>
  );
};

export default Lab6;

const randomColor = (index: number) => {
  const colors = ['#7ce0f9', '#4dc2c2', '#ff637c', '#f9a825', '#81c784'];
  return colors[index % colors.length];
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap', 
    justifyContent: 'center',
    paddingVertical: 20,
  },
  box: {
    width: 100,
    height: 100,
    margin: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
