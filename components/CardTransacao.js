import React from 'react';
import { View, Text } from 'react-native';

export default function CardTransacao({ transacao }) {
  return (
    <View style={{ padding: 10, borderBottomWidth: 1 }}>
      <Text>{transacao.nome} - R$ {transacao.valor}</Text>
      <Text>{transacao.data}</Text>
    </View>
  );
}
