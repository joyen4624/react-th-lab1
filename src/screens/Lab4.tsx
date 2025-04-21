import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Pressable,
  StyleSheet,
} from 'react-native';

// MSSV 2124802010151 - Lê Sỹ Hoài

type CounterProps = {
  count: number;
};

const CounterText: React.FC<CounterProps> = ({ count }) => {
  return (
    <Text style={styles.text}>You've pressed the button: {count} time(s)</Text>
  );
};

export default function App() {
  const [count, setCount] = useState(0);

  const handlePress = () => setCount(count + 1);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <CounterText count={count} />
        <Pressable onPress={handlePress}>
          <Text style={styles.link}>Press me</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginBottom: 10,
    fontSize: 16,
  },
  link: {
    color: 'blue',
    fontSize: 16,
  },
});
