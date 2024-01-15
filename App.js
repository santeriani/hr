import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [Age, setAge] = useState('')
  const [Hr, setHr] = useState(0)
  

  function calculate() {
    const Hrmax = (220-Age) * 0.65
    const Hrmin = (220-Age) * 0.85
    setHr(Hrmax, Hrmin)
  }



  return (
    <View style={styles.container}>
      <Text style={styles.field}>Age</Text>
      <TextInput keyboardType='decimal-pad' value={Age} onChangeText={text => setAge(text)}></TextInput>
      <Text style={styles.field}>Hr</Text>
      <Text style={styles.field}>{Hr}</Text>
      <Button onPress={calculate} title="Calculate"></Button>
      <StatusBar style="auto" />
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

  field: {
    marginBottom: 8,
  }
});
