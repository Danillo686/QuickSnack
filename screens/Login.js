import React, { useContext, useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { UserContext } from '../context/UserContext';
import Admin from './Admin';

export default function Login({ navigation }) {
  const { setUsuario } = useContext(UserContext);
  const [nome, setNome] = useState('');
  const [matricula, setMatricula] = useState('');

  const entrar = () => {
    setUsuario({ nome, matricula });
    navigation.navigate('Aluno'); // ou 'Home', depende do fluxo
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>QuickSnack - Login</Text>
      <TextInput style={styles.input} placeholder="Aluno" value={nome} onChangeText={setNome} />
      <TextInput style={styles.input} placeholder="Matrícula" value={matricula} onChangeText={setMatricula} />
      <Button title="Você é um Admin?" onPress={() => navigation.navigate('Admin')} />
      <Button title="Entrar" onPress={entrar} color="#4CAF50" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0' },
  title: { fontSize: 24, marginBottom: 20 },
  input: { width: '80%', height: 50, backgroundColor: '#fff', marginBottom: 15, paddingHorizontal: 10, borderRadius: 8 },
});

