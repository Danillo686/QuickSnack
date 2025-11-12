import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao QuickSnack!</Text>
      <Button title="Ir para Login" onPress={() => navigation.navigate('Login')} />
      <Button title="Ir para Aluno" onPress={() => navigation.navigate('Aluno')} />
      <Button title="Ir para Admin" onPress={() => navigation.navigate('Admin')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 22, marginBottom: 20 },
});
