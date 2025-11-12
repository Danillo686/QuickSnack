import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { UserContext } from '../context/UserContext';

export default function Perfil() {
  const { usuario } = useContext(UserContext);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Nome: {usuario?.nome}</Text>
      <Text>Matrícula: {usuario?.matricula}</Text>
    </View>
  );
}
