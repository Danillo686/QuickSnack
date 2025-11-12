import React, { useContext, useState } from 'react';
import { View, TextInput, Button, Switch, Text } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';
import { UserContext } from '../context/UserContext';

export default function Configuracoes() {
  const { usuario, setUsuario } = useContext(UserContext);
  const { temaClaro, alternarTema } = useContext(ThemeContext);
  const [nome, setNome] = useState(usuario?.nome || '');

  return (
    <View style={{ padding: 20 }}>
      <Text>Alterar Nome:</Text>
      <TextInput value={nome} onChangeText={setNome} />
      <Button title="Salvar" onPress={() => setUsuario({ ...usuario, nome })} />
      <Text>Modo Claro:</Text>
      <Switch value={temaClaro} onValueChange={alternarTema} />
    </View>
  );
}
