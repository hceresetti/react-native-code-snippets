import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <View style={styles.container}>
    <Text style={styles.countText}>Contador de pessoas</Text>
      <Text style={styles.countText}>Contagem: {count}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Aumentar" onPress={incrementCount} color="green" />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Diminuir" onPress={decrementCount} color="red" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  countText: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    marginVertical: 10,
  },
});

export default App;
