import React from 'react';
import { View, Text, Button } from 'react-native';

export default function DetalhesCompra({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Detalhes da Compra</Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}
