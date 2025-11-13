import React, { useContext, useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import { UserContext } from '../context/UserContext';

export default function Login({ navigation }) {
  const { setUsuario } = useContext(UserContext);
  const [nome, setNome] = useState('');
  const [matricula, setMatricula] = useState('');

  const entrar = () => {
    if (nome === '' || matricula === '') {
      alert("Preencha todos os dados");
      navigation.navigate('Login');
      return;
    } else {
      setUsuario({ nome, matricula });
      navigation.navigate('Aluno');
    }
  };

  return (
    <ImageBackground
      source={require('../assets/fundo-claro-login.jpg')} // caminho correto
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>QuickSnack - Login</Text>
        <TextInput style={styles.input} placeholder="Aluno" value={nome} onChangeText={setNome} />
        <TextInput style={styles.input} placeholder="Matrícula" value={matricula} onChangeText={setMatricula} />

        <TouchableOpacity style={styles.adminButton} onPress={() => navigation.navigate('Admin')}>
          <Text style={styles.adminButtonText}>Você é um Admin?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.enterButton} onPress={entrar}>
          <Text style={styles.enterButtonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: { 
    width: '100%',
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.8)', // leve transparência para destacar os inputs
    padding: 20,
    borderRadius: 10,
  },
  title: { fontSize: 30, marginBottom: 20, fontWeight: "bold"},
  input: { 
    width: '80%', 
    height: 50, 
    backgroundColor: '#fff', 
    marginBottom: 15, 
    paddingHorizontal: 10, 
    borderRadius: 8, 
    borderWidth: 2
  },
  adminButton: {
    borderWidth: 2,
    borderColor: '#2196F3',
    backgroundColor: '#E3F2FD',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 15,
  },
  adminButtonText: {
    color: '#2196F3',
    fontSize: 16,
    fontWeight: 'bold',
  },
  enterButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  enterButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
