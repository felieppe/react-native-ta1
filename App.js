import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

import { useState } from 'react';

export default function App() {
  const [contador, setContador] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.container__text}>Contador: {contador}</Text>
      <StatusBar style="auto" />

      <Button style={styles.container__button} title="Incrementar" onPress={() => setContador(contador + 1)} />
      <Button style={styles.container__button} title="Decrementar" onPress={() => setContador(contador - 1)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container__button: {
    margin: 10,
  },

  container__text: {
    fontSize: 40,
    marginBottom: 20,
  },
});
  